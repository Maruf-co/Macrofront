import { default as ReactModal } from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ExitButtonStyle, ModalStyles } from './Modal.styles';
import { ModalProps } from './types';

import Button from '../Button';

const Modal: React.FC<ModalProps> = ({ title, isOpen, handleClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={title}
      ariaHideApp={false}
      style={ModalStyles}
    >
      {children}
      <button onClick={handleClose} css={ExitButtonStyle}>
        <FontAwesomeIcon icon={faTimes} size="2x" color="#ff0000" />
      </button>
    </ReactModal>
  );
};

export default Modal;
