import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const ItemWrapper = styled.div`
  width: 300px;
  flex-basis: calc(100% / 4 - 30px);
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 5px;
  overflow: hidden;
  background-color: rgb(255, 215, 0);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transform: scale(1);
  transition: all 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: all 250ms linear;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 5px solid rgb(0, 87, 183);
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px;
  color: #000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
