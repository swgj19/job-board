import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar, logoutUser } from '../features/user/userSlice';

const Navbar = () => {
	const [showLogout, setShowLogout] = useState(false);
	const { user } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const toggleBtnRef = useRef(null);

	const toggle = () => {
		dispatch(toggleSidebar());
	};

	const handleToggleDropdown = (event) => {
		event.stopPropagation();
		setShowLogout((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				showLogout &&
				toggleBtnRef.current &&
				!toggleBtnRef.current.contains(event.target)
			) {
				setShowLogout(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [showLogout]);

	return (
		<Wrapper>
			<div className='nav-center'>
				<button type='button' className='toggle-btn' onClick={toggle}>
					<FaAlignLeft />
				</button>
				<div>
					<Logo />
					<h3 className='logo-text'>dashboard</h3>
				</div>
				<div className='btn-container'>
					<button
						ref={toggleBtnRef}
						type='button'
						className='btn'
						onClick={handleToggleDropdown}
					>
						<FaUserCircle />
						{user?.name}
						<FaCaretDown />
					</button>
					<div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
						<button
							type='button'
							className='dropdown-btn'
							onClick={() => {
								console.log('Logout button clicked');
								dispatch(logoutUser());
							}}
						>
							logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
