import styled from '@emotion/styled';
import { css } from '@emotion/react';
import '@fontsource/russo-one';

export const backgroundStyle = (height: number, background: string | undefined) => css`
  width: 100%;
  height: ${height}px;
  background-color: black;
  ${background && `background-image: url(${background});`}
  background-repeat: no-repeat;
  background-position: center;
`;

export const MainFlexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: inherit;
  margin: 0px 215px;
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
      display: flex;


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
