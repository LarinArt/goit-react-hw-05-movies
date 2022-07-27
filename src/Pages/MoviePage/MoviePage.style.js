import styled from 'styled-components';
import { Form, Field } from 'formik';
import { FcSearch } from 'react-icons/fc';

export const StyledForm = styled(Form)`
  position: fixed;
  top: 10px;
  z-index: 101;
  display: flex;
  align-items: center;
  margin-left: 270px;
`;

export const StyledInput = styled(Field)`
  width: 400px;
  height: 25px;
  border-radius: 5px;
  padding-left: 10px;
  outline: none;
  border: none;
  background-color: blanchedalmond;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: blanchedalmond;
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: all 250ms linear;
  }
`;

export const Icon = styled(FcSearch)`
  height: 25px;
  width: 25px;
  background-color: blanchedalmond;
`;
