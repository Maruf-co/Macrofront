import React from 'react';

import { AnimeModalProps } from './types';
import Modal from '../../common/Modal';

const AnimeModal: React.FC<AnimeModalProps> = ({ isOpen, handleClose }) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} title={'anime'}>
      <h2>I am Modal</h2>
    </Modal>
  );
};

export default AnimeModal;
