import styled from 'styled-components';

const Wrapper = styled.article`
	display: flex;
	width: 100%;
	flex-wrap: nowrap;
	margin-bottom: 2em;
	header {
		flex: 30%;
		background-color: var(--white);
		padding: 10px;
	}
	.main-icon {
		width: 22px;
		height: 22px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--primary-500);
		border-radius: var(--borderRadius);
		font-size: 1.2rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--white);
		margin-right: 2rem;
	}
	.info {
		h5 {
			margin-bottom: 0.25rem;
		}
		p {
			margin: 0;
			text-transform: capitalize;
			color: var(--grey-400);
			letter-spacing: var(--letterSpacing);
		}
	}
	.pending {
		background: #fcefc7;
		color: #e9b949;
	}
	.interview {
		background: #e0e8f9;
		color: #647acb;
	}
	.declined {
		color: #d66a6a;
		background: #ffeeee;
	}
	.content {
		flex: 70%;
		background-color: var(--white);
		padding: 10px;
	}

	.content-center {
		display: flex;
		flex-grow: 1;
		justify-content: space-between;
	}

	.status {
		border-radius: var(--borderRadius);
		text-transform: capitalize;
		letter-spacing: var(--letterSpacing);
		text-align: center;
		width: auto;
		height: 30px;
		margin-top: 0.5rem;
		padding-left: 0.2em;
		padding-right: 0.2em;
	}
	footer {
		margin-top: 1rem;
	}
	.edit-btn,
	.delete-btn {
		letter-spacing: var(--letterSpacing);
		cursor: pointer;
		height: 30px;
	}
	.edit-btn {
		color: var(--green-dark);
		background: var(--green-light);
		margin-right: 0.5rem;
	}
	.delete-btn {
		color: var(--red-dark);
		background: var(--red-light);
	}
	&:hover .actions {
		visibility: visible;
	}
`;

export default Wrapper;
