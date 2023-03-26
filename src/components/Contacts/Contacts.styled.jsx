import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  outline: 2px solid black;
  padding: 10px;
`;

export const Title = styled.h3`
  padding: 20px;
  font-size: 34px;
  font-style: italic;
  margin-top: 20px;
  color: #000000;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  p {
    font-weight: 700;
    font-size: 18px;
    margin-right: 10px;
  }
  button {
    font-weight: 500;
    cursor: pointer;
    width: 100px;
    height: 35px;
    background-color: #5ca8f4;
    border-radius: 5px;

    &:hover,
    &:focus {
      background-color: #228b22;
      border: 1px solid #99004f;
    }
  }
`;
