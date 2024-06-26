import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute } from './pages';
import {
	AllJobs,
	Profile,
	SharedLayout,
	Stats,
	AddJob,
} from './pages/dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<SharedLayout />
							</ProtectedRoute>
						}
					>
						<Route index element={<Stats />} />
						<Route path='all-jobs' element={<AllJobs />} />
						<Route path='add-job' element={<AddJob />} />
						<Route path='profile' element={<Profile />} />
					</Route>
					<Route path='landing' element={<Landing />} />
					<Route path='register' element={<Register />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<ToastContainer position='top-center' draggable={false} />
			</BrowserRouter>
		</>
	);
};

export default App;
