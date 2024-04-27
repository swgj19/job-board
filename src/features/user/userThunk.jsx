import customFetch from '../../utils/axios';
import { logoutUser } from './userSlice';

export const registerUserThunk = async (url, user, thunkAPI) => {
	try {
		const resp = await customFetch.post(url, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const loginUserThunk = async (url, user, thunkAPI) => {
	try {
		const resp = await customFetch.post(url, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const updateUserThunk = async (url, user, thunkAPI) => {
	try {
		const resp = await customFetch.patch(url, user, {
			headers: {
				// user is slice, then user state property
				authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
			},
		});

		return resp.data;
	} catch (error) {
		// console.log(error.response);
		if (error.response.status === 401) {
			thunkAPI.dispatch(logoutUser());
			return thunkAPI.rejectWithValue('Not authorized. Logging out.');
		}
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};
