import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Loader } from 'components/ui/Loader/Loader';
import { Container } from 'components/ui/Container';
import { Footer } from './common/Footer/Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 50px);
`;

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};
