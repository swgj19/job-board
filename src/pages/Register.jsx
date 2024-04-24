import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage.js';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);
	const { user, isLoading } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const { name, email, password, isMember } = values;
	const handleChange = (e) => {
		const nameTyped = e.target.name;
		const valueTyped = e.target.value;
		console.log(nameTyped, valueTyped);
		// Update state with old values and set new values
		// object literal [] is key and value
		setValues({ ...values, [nameTyped]: valueTyped });
		console.log(values);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password || (!isMember && !name)) {
			toast.error('Please fill out all fields.');
			return;
		}

		if (isMember) {
			dispatch(loginUser({ email: email, password: password }));
			return;
		}
		dispatch(registerUser({ name: name, email: email, password: password }));
	};

	const toggleMembers = (e) => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={handleSubmit}>
				<Logo />
				<h3>{values.isMember ? 'Login' : 'Register'}</h3>
				{!values.isMember && (
					<FormRow
						type='text'
						name='name'
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				{/* email field */}
				<FormRow
					type='email'
					name='email'
					value={values.email}
					handleChange={handleChange}
				/>
				{/* password field */}
				<FormRow
					type='password'
					name='password'
					value={values.password}
					handleChange={handleChange}
				/>
				<button type='submit' className='btn btn-block' disabled={isLoading}>
					Submit
				</button>
				<p>
					{values.isMember ? 'Not a member yet?' : 'Already a member?'}
					<button type='button' onClick={toggleMembers} className='member-btn'>
						{values.isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default Register;
