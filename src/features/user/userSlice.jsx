import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
		// try {
		// 	// send user data to server to register
		// 	const response = await someApi.register(user);
		// 	return response.data;
		console.log(`Register User: ${JSON.stringify(user)}`);
		// } catch (error) {
		// 	// toast error
		// }
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

/*User Registers: A user fills out the registration form and submits it.
Thunk Dispatched: The form data is dispatched to the registerUser thunk.
Process and Update: After processing the form data (like sending it to a backend and getting a response), an action is dispatched to update the Redux state with the new user data.
Redux State Updated: The user property in your Redux state (initialState.user) is updated with the new user data, moving from null to containing the user's details.*/
