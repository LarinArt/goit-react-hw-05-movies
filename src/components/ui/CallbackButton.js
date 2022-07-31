import styled from 'styled-components';

export const CallbackButton = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  margin-top: 20px;
  margin-left: 60px;
  color: black;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: rgb(255, 215, 0);
  outline: none;
  cursor: pointer;

  &:hover {
    color: rgb(0, 87, 183);
    transition: all 250ms linear;
  }
`;
