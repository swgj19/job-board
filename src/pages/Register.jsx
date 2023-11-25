import { useState, useEffect } from 'react';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage.js';

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => {
		console.log(e.target);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
	};

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={handleSubmit}>
				<Logo />
				<h3>Login</h3>
				{/* name field */}
				<div className='form-row'>
					<label forhtml='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						placeholder='name'
						value={values.name}
						onChange={handleChange}
						className='form-input'
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					Submit
				</button>
			</form>
		</Wrapper>
	);
};

export default Register;
