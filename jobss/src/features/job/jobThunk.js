import { customFetch } from "../../utils";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobs";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";

const authHeader = (thunkAPI) => {
    return {
        headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        }
    }
}

export const createJobThunk = async (job, thunkAPI) => {
    try {
        const resp = await customFetch.post('/jobs', job, authHeader);
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (err) {
        if (err.response.status === 401) {
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
        }
        return thunkAPI.rejectWithValue(err.response.data.msg);
    }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
        const resp = await customFetch.delete(`/jobs/${jobId}`, authHeader);
        thunkAPI.dispatch(getAllJobs());
        return resp.data;
    } catch (err) {
        thunkAPI.dispatch(hideLoading());
        return thunkAPI.rejectWithValue(err.response.data.msg);
    }
};

export const editJobThunk = async ({jobId, job}, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/jobs/${jobId}`, job, authHeader);
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.msg);
    }
}