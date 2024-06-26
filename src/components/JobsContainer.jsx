import { useEffect } from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';

const JobsContainer = () => {
	const { jobs, isLoading } = useSelector((store) => store.allJobs);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('Component mounted, dispatching getAllJobs');
		dispatch(getAllJobs());
		console.log('Dispatch called:', dispatch(getAllJobs()));
	}, []);

	if (isLoading) {
		return <Loading center={true} />;
	}

	if (jobs.length === 0) {
		return (
			<Wrapper>
				<h2>No jobs to display</h2>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h5>jobs info</h5>
			<div className='jobs'>
				{jobs.map((job) => {
					console.log(job);
					return <Job key={job._id} {...job} />;
				})}
			</div>
		</Wrapper>
	);
};

export default JobsContainer;
