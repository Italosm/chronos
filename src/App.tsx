import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import ChronosLogo from "./components/Logo";

export function App() {
  return (
    <>
      <Container>
        <ChronosLogo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
