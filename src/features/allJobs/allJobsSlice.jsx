import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

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

const allJobsSlice = createSlice({
	name: 'allJobs',
	initialState: initialState,
	reducers: {},
});

export default allJobsSlice.reducer;
