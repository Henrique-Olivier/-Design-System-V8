import styled from "styled-components";
import ProgressBar from "./components/Progress";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Typography from "./components/Typography/typography";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const DivProgress = styled.div`
  width: 90%;
`;

const Container = styled.div`
  width: 90vw;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  gap: 10px;
`;

export default function App() {
  const [percent, setPercent] = useState(90);

  function aumentarPorcentagem() {
    setPercent((percent) => percent += 1);
  }
  
  function diminuirPorcentagem() {
    if (percent > 100) {
      setPercent(99);
    } 
    setPercent((percent) => percent -= 1);
  }

  const [progressStyle, setProgressStyle] = useState("percent");

  useEffect(() => {
    if (percent >= 100) {
      setProgressStyle("complete");
    } else {
      setProgressStyle("percent");
    }
  }, [percent]);


  return (
    <Main>
      <Container>
        <DivProgress>
          <ProgressBar percents={percent} style={progressStyle} type="line" />
          <Button
            size="large"
            variant="main"
            onClick={aumentarPorcentagem}
          >
            <Typography size="main" tag="body-M-regular">
              Aumentar
            </Typography>
          </Button>
          <Button
            size="large"
            variant="secondary"
            onClick={diminuirPorcentagem}
          >
            <Typography size="main" tag="body-M-regular">
              Diminuir
            </Typography>
          </Button>
        </DivProgress>
      </Container>
    </Main>
  );
}
