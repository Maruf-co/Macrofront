import React from 'react';
import {
  HeaderImgPopupStyle,
  HeaderImgStyle,
  HeaderImgWrapperStyle,
  FlexContainer,
  HeaderTextStyle3,
  HeaderTextStyle4,
} from './BooksCollection.styles';

import BooksCollectionProps from './types';

import Image from '../../common/Image';
import Button from '../../common/Button';

const handleClick = () => {
  const searchForm = document.getElementById('search-form');
  searchForm?.scrollIntoView({ behavior: 'smooth' });
};

const BooksCollection: React.FC<BooksCollectionProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  descriptionSide,
}) => {
  return (
    <div css={HeaderImgWrapperStyle}>
      <Image css={HeaderImgStyle} src={imgSrc} alt={imgAlt} />

      <div css={HeaderImgPopupStyle(descriptionSide)}>
        <div css={FlexContainer}>
          <div css={HeaderTextStyle3}>{title}</div>
          <div css={HeaderTextStyle4}>{description}</div>
          <Button variant="pure-cyan" onClick={handleClick}>
            See the books
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BooksCollection;
