import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/Container";
import { ChronosLogo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Cycles } from "./components/Cycles";
import { Button } from "./components/Button";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Container>
        <ChronosLogo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input
              type="text"
              label="task"
              id="input"
              placeholder="O que você quer focar agora?"
            />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <Button icon={<PlayCircleIcon />} />
            {/* <Button icon={<StopCircleIcon />} color="red" /> */}
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
