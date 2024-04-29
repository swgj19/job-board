import customFetch from '../../utils/axios';
import { logoutUser } from '../user/userSlice';

export const createJobThunk = async (url, job, thunkAPI) => {
	try {
		resp = await customFetch.post(url, job, {
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
