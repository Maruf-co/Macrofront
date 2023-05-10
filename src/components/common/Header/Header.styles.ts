import styled from '@emotion/styled';
import { css } from '@emotion/react';
import '@fontsource/russo-one';

export const backgroundStyle = (height: number, background: string | undefined) => css`
  width: 100%;
  max-width: 1920px;
  height: ${height}px;
  background-color: black;
  ${background && `background-image: url(${background});`}
  background-repeat: no-repeat;
  background-position: top;

  margin: 0 auto;
`;

export const containerStyle = (isGrid: boolean) => css`
  ${isGrid
    ? `
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 65px;

      width: 1300px;
      margin: 0 auto;
    `
    : `
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;


  `}
`;

export const columnStyle = (position: string) => css`
  position: absolute;
  bottom: 20%;
  ${position === 'left' && 'left: 8%;'}
  ${position === 'right' && 'right: 10%;'}
  width: 435px;
`;

export const gridColumnStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const titleStyle = css`
  font-family: 'Russo One', sans-serif;
  font-size: 72px;
  color: white;
`;

export const descriptionStyle = css`
  font-family: 'Russo One', sans-serif;
  font-size: 16px;
  color: white;
`;
