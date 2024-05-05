import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllJobsThunk } from './allJobsThunk';

const initialFilterState = {
	search: '',
	searchStatus: '',
	searchType: 'all',
	sort: 'latest',
	sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
	isLoading: true,
	jobs: [],
	totalJobs: 0,
	numOfPages: 1,
	page: 1,
	stats: {},
	monthlyApplications: [],
	...initialFilterState,
};

export const getAllJobs = createAsyncThunk(
	'allJobs/getAllJobs',
	async (_, thunkAPI) => {
		return getAllJobsThunk('/jobs', thunkAPI);
	}
);

const allJobsSlice = createSlice({
	name: 'allJobs',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[getAllJobs.pending]: (state) => {
			console.log('fetching jobs...');
			state.isLoading = true;
		},
		[getAllJobs.fulfilled]: (state, { payload }) => {
			console.log('Fetching successful:', payload);
			state.isLoading = false;
			state.jobs = payload.jobs;
		},
		[getAllJobs.rejected]: (state, { payload }) => {
			console.log('Fetching failed:', payload);
			state.isLoading = false;
			toast.error(payload);
		},
	},
});

export default allJobsSlice.reducer;
