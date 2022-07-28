import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Loader } from 'components/Loader/Loader';
import styled from 'styled-components';
import BgImg from '../images/videoImage.jpg';
import { Container } from 'components/ui/Container';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </Wrapper>
  );
};
