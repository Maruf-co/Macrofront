import styled from "@emotion/styled";
import {css} from "@emotion/react";
import "@fontsource/russo-one";

export const ContainerStyled = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 50px;
  background-color: #161616;
  color: white;
`;

export const TextStyle = css`
  font-family: "Russo One", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

export const TopMoviesWrapperStyled = styled.div`
  padding-top: 30px;
  background-color: black;
  color: white;
  padding-left: 15%;
  padding-right: 15%;
  font-family: "Russo One", sans-serif;
`;

export const SelectTextStyled = styled.div`
  margin-right: 10px;
`;

export const MoviesGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  margin-top: 30px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
`;

export const UnsetButtonStyled = styled.button`
  all: unset;
`;

export const SelectGenreStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const ModalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9999,
    },
    content: {
        backgroundColor: '#111',
        border: 'none',
        borderRadius: '10px',
        padding: '20px',
        color: 'white',
        width: '70%',
        height: '75%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        zIndex: 10000,
    }
};

export const CardStyle = css`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 15px;
  font-family: "Russo One", sans-serif;
`;

export const ModalTitle = styled.div`
  font-family: "Russo One", sans-serif;
  font-size: 2vw;
`;

export const ImgStyled = styled.img`
  float: left;
  margin-right: 20px;
  margin-top: 20px;
  max-height: 400px;
`;

export const TextContainer = styled.div`
  font-family: "Russo One", sans-serif;
  font-size: 0.9vw;
  overflow: auto;
`;

export const ExitButtonStyled = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 5px;
`;

export const SearchStyle = css`
  display: flex;
  align-items: center;
`;