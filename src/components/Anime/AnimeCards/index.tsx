import React, { useState } from 'react';
import { gridStyle } from './AnimeCards.styles';

import { AnimeCardsProps } from './types';

import Card from '../../common/Card';
import Button from '../../common/Button';
import AnimeModal from '../AnimeModal';

const AnimeCards: React.FC<AnimeCardsProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderCards = data.map((item) => {
    return (
      <Button onClick={handleOpen}>
        <Card img={item.images.jpg.image_url} alt={`Cover for ${item.title}`} title={item.title} />
      </Button>
    );
  });

  return (
    <>
      <div css={gridStyle}>{renderCards}</div>
      {isOpen && <AnimeModal isOpen={isOpen} handleClose={handleClose} />}
    </>
  );
};

export default AnimeCards;
