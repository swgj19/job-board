import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';
import links from '../utils/links';
import NavLinks from './NavLinks';

const SmallSideBar = () => {
	/* useSelector((store) => store.user)
	You can think of a selector function in Redux as using dot notation to access a specific property of an object—in this case, the Redux store's state object. The selector function essentially selects or retrieves a particular part of the state. */

	const { isSidebarOpen } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const toggle = () => {
		dispatch(toggleSidebar());
	};

	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}
			>
				<div className='content'>
					<button className='close-btn' onClick={toggle}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggle} />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSideBar;
