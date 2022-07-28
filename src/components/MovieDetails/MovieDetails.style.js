import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1400px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Img = styled.img`
  border-radius: 5px;
  transform: scale(1);
  transition: all 250ms linear;
`;

export const Info = styled.div`
  padding: 20px;
  margin-left: 100px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const InfoTitle = styled.h1`
  margin-bottom: 10px;
  color: rgb(255, 215, 0);
`;

export const ReleaseDate = styled.h2`
  margin-bottom: 20px;
  color: rgb(255, 215, 0);
`;

export const Score = styled.p`
  margin-bottom: 30px;
  color: rgb(255, 215, 0);
`;

export const Overview = styled.h2`
  margin-bottom: 10px;
  color: rgb(255, 215, 0);
`;

export const OverviewInfo = styled.p`
  text-align: start;
  margin-bottom: 30px;
  color: rgb(255, 215, 0);
`;

export const Genres = styled.h2`
  margin-bottom: 10px;
  color: rgb(255, 215, 0);
`;

export const GenresInfo = styled.p`
  color: rgb(255, 215, 0);
`;

export const Information = styled.div`
  background-color: rgb(255, 215, 0);
  color: black;
  padding: 25px;
  color: rgb(255, 215, 0);
`;

export const NavLinkStyle = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: all 250ms linear;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover,
  &:focus {
    color: rgb(0, 87, 183);
    transition: all 250ms linear;
  }
`;
