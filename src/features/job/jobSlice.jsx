import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorage';
import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk';

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

export const deleteJob = createAsyncThunk(
	'job/deleteJob',
	async (jobId, thunkAPI) => {
		return deleteJobThunk(`/jobs/${jobId}`, thunkAPI);
	}
);

export const editJob = createAsyncThunk(
	'job/editJob',
	async ({ jobId, job }, thunkAPI) => {
		console.log('Inside editJob Thunk', { jobId, job });
		return editJobThunk(`/jobs/${jobId}`, job, thunkAPI);
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
		setEditJob: (state, { payload }) => {
			return { ...state, isEditing: true, ...payload };
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
		[deleteJob.pending]: (state) => {
			state.isLoading = true;
		},
		[deleteJob.fulfilled]: (state) => {
			state.isLoading = false;
			toast.success('Job deleted successfully!');
		},
		[deleteJob.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
		[editJob.pending]: (state) => {
			state.isLoading = true;
		},
		[editJob.fulfilled]: (state) => {
			state.isLoading = false;
			toast.success('Job Modified...');
		},
		[editJob.rejected]: (state, { payload }) => {
			state.isLoading = false;
			toast.error(payload);
		},
	},
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
