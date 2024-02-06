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
        const {page, search, searchStatus, searchType, sort} =
            thunkAPI.getState().allJobs;

        let url = `/jobs?status=${searchStatus}&jobType=${searchType}&`
        +`sort=${sort}&page=${page}`
        if (search) {
            url = url + `$search=${search}`;
        }
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

export const showStats = createAsyncThunk(
    'allJobs/showStats',
    async (_, thunkAPI) => {
        try {
            const resp = await customFetch.get('/jobs/stats', {
                headers: {
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                },
            }
            );
            return resp.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.msg)
        }
    }
)

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        handleChange: (state, {payload: {name, value}}) => {
            // state.page = 1
            state[name] = value;
        },
        clearFilters: (state) => {
            return {...state, ...initialFilterState}
        },
        changePage: (state, {payload}) => {
            state.page = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllJobs.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.jobs = payload.jobs;
                state.numOfPages = payload.numOfPages;
                state.totalJobs = payload.totalJobs;
            })
            .addCase(getAllJobs.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
            .addCase(showStats.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(showStats.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.stats = payload.defaultStats;
                state.monthlyApplications = payload.monthlyApplications;
            })
            .addCase(showStats.rejected, (state, {payload}) => {
                state.isLoading = false;
                toast.error(payload)
            })
    }
});

export default allJobsSlice.reducer;
export const {showLoading, hideLoading, changePage,
    handleChange, clearFilters} = allJobsSlice.actions;

