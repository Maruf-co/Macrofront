import React from 'react';
import {
  backgroundStyle,
  containerStyle,
  columnStyle,
  gridColumnStyle,
  titleStyle,
  descriptionStyle,
} from './Header.styles';

import HeaderProps from './types';
import Button from '../Button';

const UniversalHeader: React.FC<HeaderProps> = ({
  height = 1080,
  background,
  contentBlock,
  textBlock,
  withoutButton = false,
}) => {
  const handleClick = () => {
    const searchForm = document.getElementById('search-form');
    searchForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div css={backgroundStyle(height, background)}>
      <div css={containerStyle(contentBlock !== undefined)}>
        <div css={contentBlock === undefined ? columnStyle(textBlock.position) : gridColumnStyle}>
          <div css={titleStyle}>{textBlock.title}</div>
          <div css={descriptionStyle}>{textBlock.description}</div>

          {withoutButton || (
            <Button variant="primary" onClick={handleClick}>
              Explore
            </Button>
          )}
        </div>
        <div css={gridColumnStyle}>{contentBlock}</div>
      </div>
    </div>
  );
};

export default UniversalHeader;
