import { FormRow } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CgRowFirst } from 'react-icons/cg';

const AddJob = () => {
	const {
		isLoading,
		position,
		company,
		jobLocation,
		jobType,
		jobTypeOptions,
		status,
		statusOptions,
		isEditing,
		editJobId,
	} = useSelector((store) => store.job);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!position || !company || !jobLocation) {
			toast.error('Please fill out all fields');
			return;
		}
	};

	const handleJobInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
	};

	return (
		<Wrapper>
			<form className='form'>
				<h3>{isEditing ? 'edit job' : 'add job'}</h3>
				<div className='form-center'>
					{/* position */}
					<FormRow
						type='text'
						name='position'
						value={position}
						handleChange={handleJobInput}
					/>
					{/* position */}
					<FormRow
						type='text'
						name='company'
						value={company}
						handleChange={handleJobInput}
					/>
					{/* position */}
					<FormRow
						type='text'
						name='jobLocation'
						labelText='job location'
						value={jobLocation}
						handleChange={handleJobInput}
					/>
					{/* status */}
					<div className='form-row'>
						<label htmlFor='status' className='form-label'>
							status
						</label>
						<select
							name='status'
							id='status'
							value={status}
							onChange={handleJobInput}
							className='form-select'
						>
							{statusOptions.map((itemValue, index) => {
								return (
									<option key={index} value={itemValue}>
										{itemValue}
									</option>
								);
							})}
						</select>
					</div>
					<div className='btn-container'>
						<button
							type='button'
							className='btn btn-block clear-btn'
							onClick={() => console.log('clear values')}
						>
							clear
						</button>
						<button
							type='submit'
							className='btn btn-block clear-btn'
							onClick={handleSubmit}
							disabled={isLoading}
						>
							submit
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	);
};

export default AddJob;
