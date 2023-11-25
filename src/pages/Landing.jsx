import logo from '../assets/images/logo.png';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<img src={logo} alt='job board logo' className='logo' />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						Job <span>tracking</span> app!
					</h1>
					<p>
						I'm baby xOXO mumblecore grailed, ethical craft soda listicle pop-up
						tbh gentrify iceland copper mug neutra gastropub asymmetrical. Pok
						pok pug pork belly jianbing fixie mustache jean shorts distillery
						vice DIY asymmetrical bitters neutral milk hotel blackbird spyplane.
						Etsy pop-up vinyl tote bag lyft, typewriter pinterest copper mug
						bitters intelligentsia listicle prism.
					</p>
					<button className='btn btn-hero'>Login/Register</button>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
