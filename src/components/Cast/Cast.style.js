import styled from 'styled-components';

export const Section = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  margin-left: -30px;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 4 - 30px);
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 215, 0);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: scale(1);
  transition: all 250ms linear;
`;

export const Img = styled.img`
  width: 100%;
  height: 450px;
  overflow: hidden;
`;

export const Name = styled.p`
  padding: 10px;
  font-weight: 700;
`;
