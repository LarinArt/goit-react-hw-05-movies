import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './common/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/ui/Container';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
