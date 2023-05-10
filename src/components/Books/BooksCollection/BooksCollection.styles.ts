import { css } from '@emotion/react';
import '@fontsource/russo-one';

export const HeaderImgWrapperStyle = css`
  position: relative;
  margin: 30px 0 60px;
`;

export const HeaderImgStyle = css`
  width: 920px;
  height: 445px;
`;

export const HeaderImgPopupStyle = (descriptionSide: string) => css`
  background-color: white;
  border-radius: 10px;
  padding: 20px 30px;
  z-index: 1;
  width: 480px;
  height: 175px;
  position: absolute;
  bottom: -30px;
  ${descriptionSide === 'left' && 'left: -30px;'}
  ${descriptionSide === 'right' && 'right: -30px;'}
`;

export const FlexContainer = css`
  font-family: 'Russo One', sans-serif;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: inherit;
`;

export const HeaderTextStyle3 = css`
  font-family: 'Russo One', sans-serif;
  font-size: 22px;
  color: black;
`;

export const HeaderTextStyle4 = css`
  font-family: 'Russo One', sans-serif;
  font-size: 18px;
  color: #555555;
`;

export const HeaderTextStyle5 = css`
  all: unset;
  font-family: 'Russo One', sans-serif;
  font-size: 18px;
  color: #00cedb;
`;
