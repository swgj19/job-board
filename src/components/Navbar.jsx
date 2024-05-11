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
		// Prevents the document's click listener from firing when the button itself is clicked
		event.stopPropagation();
		setShowLogout((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			// Check if the click is outside the toggle button and the dropdown is visible
			if (
				showLogout &&
				toggleBtnRef.current &&
				!toggleBtnRef.current.contains(e.target)
			) {
				setShowLogout(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
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
							onClick={() => dispatch(logoutUser('Logging out...'))}
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
