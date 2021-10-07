import styled, { createGlobalStyle } from 'styled-components';

export const Globalstyle=createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
`;

export const Container = styled.div`
  background-color: #27282F;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 24px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 24px;
`;

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 45px;
  }
`;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;

  input[type=submit] {
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 32px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    margin: 0 24px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
