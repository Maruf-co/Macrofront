import { css } from '@emotion/react';

export const ModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999,
  },
  content: {
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '10px',
    padding: '20px',
    color: 'white',
    width: '50%',
    height: '75%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    zIndex: 10000,
  },
};

export const ExitButtonStyle = css`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
`;
