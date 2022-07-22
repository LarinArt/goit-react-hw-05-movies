import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieNavLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  margin-left: 35px;
  text-decoration: none;
  color: black;

  &.active {
    color: rgb(0, 87, 183);
  }
`;
