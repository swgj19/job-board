import styled from 'styled-components';

const Wrapper = styled.section`
	.jobs {
		display: flex;
		flex-direction: column;
		width: 100%;
		flex-wrap: nowrap;
	}

	@media (min-width: 992px) {
		.jobs {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
`;

export default Wrapper;
