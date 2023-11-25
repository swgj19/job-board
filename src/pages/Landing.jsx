import hero from '../assets/images/hero.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						Job <span>Board</span> Central!
					</h1>
					<p>
						Welcome to Job Board Central, your ultimate destination for career
						advancement and opportunity discovery! We're here to bridge the gap
						between talented individuals and their dream jobs. Our platform is a
						vibrant hub where job seekers meet their future employers in an
						environment that champions diversity, innovation, and growth.
					</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
				<img src={hero} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
