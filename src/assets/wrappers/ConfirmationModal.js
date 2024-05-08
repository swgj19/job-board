import styled from 'styled-components';

const Wrapper = styled.article`
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background: white;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
		z-index: 1000;
	}

	.modal-actions {
		margin-top: 20px;
		text-align: center;
	}

	.modal-btn {
		margin: 0 10px;
		padding: 5px 10px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.confirm-btn {
		background-color: green;
		color: white;
	}

	.cancel-btn {
		background-color: red;
		color: white;
	}
`;

export default Wrapper;
