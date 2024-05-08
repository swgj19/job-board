import React, { useState } from 'react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import ConfirmationModal from './ConfirmationModal.jsx';
import moment from 'moment';
import { deleteJob, setEditJob } from '../features/job/jobSlice';

const Job = ({
	_id,
	position,
	company,
	jobLocation,
	jobType,
	createdAt,
	status,
}) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const dispatch = useDispatch();

	const date = moment(createdAt).format('MMM Do, YYYY');

	const handleDelete = () => {
		dispatch(deleteJob(_id));
		setModalOpen(false);
	};

	return (
		<Wrapper>
			<header>
				<div className='main-icon'>{company.charAt(0)}</div>
				<div className='info'>
					<h5>{position}</h5>
					<p>{company}</p>
				</div>
			</header>
			<div className='content'>
				<div className='content-center'>
					<div className='content-center'>
						<JobInfo icon={<FaLocationArrow />} text={jobLocation} />
						<div className={`status ${status}`}>{date}</div>
						<JobInfo icon={<FaBriefcase />} text={jobType} />
						<div className={`status ${status}`}>{status}</div>
					</div>
				</div>
				<footer>
					<div className='actions'>
						<Link
							to='/add-job'
							className='btn edit-btn'
							onClick={() =>
								dispatch(
									setEditJob({
										editJobId: _id,
										position,
										company,
										jobLocation,
										jobType,
										status,
									})
								)
							}
						>
							Edit
						</Link>
						<button
							type='button'
							className='btn delete-btn'
							onClick={() => setModalOpen(true)}
						>
							Delete
						</button>
						<ConfirmationModal
							isOpen={isModalOpen}
							message='Are you sure you want to delete this job?'
							onConfirm={handleDelete}
							onCancel={() => setModalOpen(false)}
						/>
					</div>
				</footer>
			</div>
		</Wrapper>
	);
};

export default Job;
