import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import {
	addUserToLocalStorage,
	getUserFromLocalStorage,
	removeUserFromLocalStorage,
} from '../../utils/localStorage';
import { toast } from 'react-toastify';

// object where state data will be stored/updated
const initialState = {
	isLoading: false,
	user: getUserFromLocalStorage(),
};

// pass action user/registerUser as first param
// pass in user param as placeholder for user form data in Register.jsx
export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (user, thunkAPI) => {
		try {
			const resp = await customFetch.post('/auth/register', user);
			return resp.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

export const loginUser = createAsyncThunk(
	'/auth/login',
	async (user, thunkAPI) => {
		try {
			const resp = await customFetch.post('/auth/login', user);
			return resp.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.msg);
		}
	}
);

const userSlice = createSlice({
	// name of data state represents.
	name: 'user',
	// actual state object of user etc.
	initialState,
	// extra rules for user state statuses
	extraReducers: {
		// map action type to reducer function
		// payload is resp.data from thunk API
		/* When an action is dispatched, Redux internally calls the reducer with two arguments: the current state slice managed by that reducer, and the dispatched action.*/
		/* When you want to use a variable as a property name in an object literal, you need to wrap it in brackets []. This is known as computed property names. */
		[registerUser.pending]: (state) => {
			state.isLoading = true;
		},
		[registerUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.user = user;
			addUserToLocalStorage(user);
			toast.success(`Hello there ${user.name}`);
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		[loginUser.pending]: (state) => {
			state.isLoading = true;
		},
		[loginUser.fulfilled]: (state, { payload }) => {
			const { user } = payload;
			state.isLoading = false;
			state.user = user;
			addUserToLocalStorage(user);
			toast.success(`Welcome ${user.name}`);
		},
		[loginUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
	},
});

export default userSlice.reducer;

// Email has to be unique or server error will happen
/* Detailed User Registration Process:

1. User registers: In the Register component, users enter their information into the form fields (like name, email, and password). This data is collected and managed in the component's state using React's useState hook.

2. Form Submission Handling:
When the form is submitted via the handleSubmit function, it constructs an object from the state ({ name, email, password } for registration). This is the user argument for user param in registerUser.
Depending on whether the user is registering or logging in, the appropriate thunk (registerUser or loginUser) is dispatched with this data object as an argument.

3. Dispatching Thunk:
The dispatch function sends the action to your thunk (registerUser or loginUser). In the case of registerUser, the object { name, email, password } is passed as the user argument to the thunk. This process represents the transition of user data from local component state to global state management via Redux thunks.


4. Thunk Execution:
Inside the registerUser thunk, the user parameter receives the data object that was dispatched ({ name, email, password }). This is the same data entered by the user in the form.

This user object is then used as the payload in the customFetch.post call to send the user's data to your backend for processing (e.g., creating a new user account in your database).

5. Backend API Request:
The backend API (/auth/register) receives this data and processes it accordingly. If successful, it might return a response that could include user details, a success message, or tokens, though your current thunk implementation does not yet handle or store the response data.

6. Redux State Update (if implemented):
- After receiving a successful response from the backend, an action could be dispatched within the thunk to update the Redux state. This would involve updating the 'user' property in the initialState from 'null' to now include the detailed information of the newly registered user, reflecting their logged-in status.

*/
