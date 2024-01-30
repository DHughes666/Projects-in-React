import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { customFetch } from "../../utils";


const initialFilterState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFilterState,
};

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs', 
    async (_, thunkAPI) => {
        let url = `/jobs`
        try {
            const resp = await customFetch.get(url, {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                },
            });

            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.msg);
        }
    }
)

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllJobs.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.jobs = payload.jobs;
            })
            .addCase(getAllJobs.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
    }
});

export default allJobsSlice.reducer;
