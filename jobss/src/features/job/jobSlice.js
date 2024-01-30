import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { customFetch } from "../../utils";
import { getUserFromLocalStorage } from "../../utils";
import { logoutUser } from "../user/userSlice";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobs";

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    isEditing: false,
    editJobId: ''
};

export const createJob = createAsyncThunk(
    'job/createJob',
    async (job, thunkAPI) => {
        try {
            const resp = await customFetch.post('/jobs', job, {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                },
            });
            thunkAPI.dispatch(clearValues());
            return resp.data;
        } catch (e) {
            // logout user
            if (e.response.status === 401) {
                thunkAPI.dispatch(logoutUser());
                return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
            }
            return thunkAPI.rejectWithValue(e.response.data.msg);
        }
    }
)


export const deleteJob = createAsyncThunk(
    'allJobs/deleteJob',
    async (jobId, thunkAPI) => {
        thunkAPI.dispatch(showLoading());
        try {
            const resp = await customFetch.delete(`/jobs/${jobId}`, {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
                },
            });
            thunkAPI.dispatch(getAllJobs());
            return resp.data;
        } catch (e) {
            thunkAPI.dispatch(hideLoading());
            return thunkAPI.rejectWithValue(e.resonse.data.msg)
        }
    }
)


const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state, {payload: {name, value}}) => {
            state[name] = value;
        },
        clearValues: () => {
            return {
                ...initialState,
                jobLocation: getUserFromLocalStorage()?.location || '',
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createJob.fulfilled, (state) => {
                state.isLoading = false;
                toast.success('Job Created');
            })
            .addCase(createJob.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })

    },
});

export default jobSlice.reducer;
export const { handleChange, clearValues } = jobSlice.actions;