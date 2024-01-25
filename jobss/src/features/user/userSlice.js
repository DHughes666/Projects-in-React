import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import {
    customFetch, 
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage, 
} from '../../utils';


const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage(),
};


export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/register', user);
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.msg)
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', user);
            return resp.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.msg)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, {payload}) => {
                const {user} = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`Hello ${user.name}`);
            })
            .addCase(registerUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, {payload}) => {
                const {user} = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`Welcome Back ${user.name}`);
            })
            .addCase(loginUser.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
    }
})


export const {logoutUser, toggleSidebar} = userSlice.actions;
export default userSlice.reducer

