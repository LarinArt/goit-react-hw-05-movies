import {
  FooterWrapper,
  FooterContainer,
  Copyright,
  Link,
} from './Footer.style';
import { Container } from 'components/ui/Container';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <Copyright>
            &#169; 2022 | All Rights Reserved | Developed by
            <Link
              href="https://github.com/LarinArt/goit-react-hw-05-movies"
              target="_blank"
              rel="noreferrer"
            >
              Artem Larin
            </Link>
          </Copyright>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
};
