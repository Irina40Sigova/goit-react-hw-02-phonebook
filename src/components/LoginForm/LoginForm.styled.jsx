import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  outline: 4px solid black;
  padding: 10px;
  label {
    font-weight: 700;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  input {
    padding: 10px 10px;
    font-size: 20px;
  }
  button {
    cursor: pointer;
    width: 100px;
    font-weight: 700;
    background-color: #5ca8f4;
    border-radius: 5px;
    text-transform: uppercase;
    transition: background-color 250ms linear, border 250ms linear;
    &:hover,
    &:focus {
      background-color: #228b22;
      border: 1px solid #99004f;
    }
  }
`;
export const Err = styled(ErrorMessage)`
  color: #ff0000;
`;
