import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { Form } from "../../components/Form";
import { MainTemplate } from "../../templates/Main";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <Form />
      </Container>
    </MainTemplate>
  );
}
