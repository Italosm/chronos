import { ChronosLogo } from "../../components/Logo";
import { Container } from "../../components/Container";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";

type MainTemplateProps = {
  children: React.ReactNode;
};
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <ChronosLogo />
      </Container>

      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
