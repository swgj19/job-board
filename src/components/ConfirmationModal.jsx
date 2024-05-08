import ReactDOM from 'react-dom';
import Wrapper from '../assets/wrappers/ConfirmationModal';

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<Wrapper>
			<div className='modal-overlay'>
				<div className='modal-content'>
					<p>{message}</p>
					<div className='modal-actions'>
						<button onClick={onConfirm} className='modal-btn confirm-btn'>
							Yes
						</button>
						<button onClick={onCancel} className='modal-btn cancel-btn'>
							No
						</button>
					</div>
				</div>
			</div>
		</Wrapper>,
		document.getElementById('modal-root')
	);
};

export default ConfirmationModal;
