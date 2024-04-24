import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';

// object where state data will be stored/updated
const initialState = {
	isLoading: false,
	user: null,
};

// pass action user/registerUser as first param
// pass in user param as placeholder for user form data in Register.jsx
export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (user, thunkAPI) => {
		try {
			// send user data to server to register
			const resp = await customFetch.post('/auth/testingRegister', user);
			console.log(`Register User: ${JSON.stringify(user)}`);
			console.log(resp);
		} catch (error) {
			toast.error(error.response.data.msg);
			console.log(error.response);
		}
	}
);

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (user, thunkAPI) => {
		try {
			// send user data to server to login user
			console.log(`Logged In: ${JSON.stringify(user)}`);
		} catch (error) {}
	}
);

const userSlice = createSlice({
	// name of data state represents.
	name: 'user',
	// actual state object of user etc.
	initialState,
});

export default userSlice.reducer;

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
The backend API (/auth/testingRegister) receives this data and processes it accordingly. If successful, it might return a response that could include user details, a success message, or tokens, though your current thunk implementation does not yet handle or store the response data.

6. Redux State Update (if implemented):
- After receiving a successful response from the backend, an action could be dispatched within the thunk to update the Redux state. This would involve updating the 'user' property in the initialState from 'null' to now include the detailed information of the newly registered user, reflecting their logged-in status.

*/
