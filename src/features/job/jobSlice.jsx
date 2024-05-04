import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { createJobThunk } from './jobThunk';

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
	editJobId: '',
};

export const createJob = createAsyncThunk(
	'job/createJob',
	async (job, thunkAPI) => {
		return createJobThunk('/jobs', job, thunkAPI);
	}
);

const jobSlice = createSlice({
	name: 'job',
	initialState,
	// `reducers` object defines methods for handling state updates.
	// `handleChange` dynamically updates state properties based on key-value pairs from the payload, using bracket notation.
	// So, in the expression state[name], the value of the variable name is treated as the key to the property of the state object.
	// Are accessing the name property on the state object dynamically
	//  When an action is dispatched to this reducer, it destructures the payload to get name and value, and then uses these to update the corresponding state property.
	// For instance, with payload { name: 'jobLocation', value: 'New York' }, `state[name]` resolves to `state.jobLocation` and updates it to 'New York'.
	reducers: {
		handleChange: (state, { payload: { name, value } }) => {
			state[name] = value;
		},
		clearValues: () => {
			return initialState;
		},
	},
	extraReducers: {
		[createJob.pending]: (state) => {
			state.isLoading = true;
		},
		[createJob.fulfilled]: (state) => {
			console.log('fulfilled');
			state.isLoading = false;
			toast.success('Job created!');
		},
		[createJob.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
	},
});

export const { handleChange, clearValues } = jobSlice.actions;

export default jobSlice.reducer;
