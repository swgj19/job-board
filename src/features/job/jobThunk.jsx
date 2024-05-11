import customFetch from '../../utils/axios';
import { logoutUser } from '../user/userSlice';
import { clearValues } from './jobSlice';
import { showLoading, hideLoading, getAllJobs } from '../allJobs/allJobsSlice';

export const createJobThunk = async (url, job, thunkAPI) => {
	try {
		const resp = await customFetch.post(url, job, {
			headers: {
				authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
			},
		});
		thunkAPI.dispatch(clearValues());
		return resp.data;
	} catch (error) {
		const errorResp = error.response;
		const errorRespStatus = error.response.status === 401;
		if (errorResp && errorRespStatus) {
			thunkAPI.dispatch(logoutUser());
			return thunkAPI.rejectWithValue('Unauthorized! Logging out.');
		}
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const deleteJobThunk = async (url, thunkAPI) => {
	thunkAPI.dispatch(showLoading());
	try {
		const resp = await customFetch.delete(url, {
			headers: {
				authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
			},
		});
		thunkAPI.dispatch(getAllJobs());
		thunkAPI.dispatch(hideLoading());
		return resp.data;
	} catch (error) {
		const errorResp = error.response;
		const errorRespStatus = error.response?.status === 401;
		if (errorResp && errorRespStatus) {
			thunkAPI.dispatch(logoutUser());
			thunkAPI.rejectWithValue('Unauthorized! Logging out.');
		} else {
			thunkAPI.rejectWithValue(error.response?.data?.msg || 'Error occurred');
		}
	} finally {
		thunkAPI.dispatch(hideLoading());
	}
};

export const editJobThunk = async (url, job, thunkAPI) => {
	try {
		console.log('Sending PATCH request to:', url, 'with job:', job);
		const resp = await customFetch.patch(url, job, {
			headers: {
				authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
			},
		});
		thunkAPI.dispatch(clearValues());
		return resp.data;
	} catch (error) {
		console.error('Error in editJobThunk:', error);
		return thunkAPI.rejectWithValue(error.response?.data.msg);
	}
};
