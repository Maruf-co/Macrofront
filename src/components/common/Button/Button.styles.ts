import { css } from '@emotion/react';
import '@fontsource/russo-one';
import '@fontsource/roboto';

export const buttonStyled = (variant: string | undefined) => css`
  all: unset;
  cursor: pointer;

  ${variant === 'primary' &&
  `
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      font-weight: 600;
      background: white; 
      color: black;
      border-radius: 8px;
      border: 0px;
      width: 160px;
      padding: 14px 53px;
      margin: 20px 0px;
    `};
  ${variant === 'secondary' &&
  `
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      font-weight: 600;
      background: black;
      color: white;
      border-radius: 8px;
      border: 0px;
      width: 160px;
      padding: 14px 53px;
      margin: 20px 0px;
    `}
  ${variant === 'pure-cyan' &&
  `
      font-family: 'Russo One', sans-serif;
      font-size: 18px;
      color: #00cedb;
      border: none;
      background: none;
      padding: 0;
    `}
`;
