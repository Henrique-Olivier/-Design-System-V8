import ProgressBar from "./components/Progress";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import Typography from "./components/Typography";
import * as ProgressTypes from "./components/Progress/types";
import * as Styles from "./styles.ts";
import SaveIcon from "./components/assets/save.svg";
import ModalImg from "./components/assets/Modal Image.svg";
import Modal from "./components/Modal/index.tsx";
import Avatar from "./components/Avatar/index.tsx";
import UserImg from "./components/assets/Avatar.svg";

export default function App() {
  const [percent, setPercent] = useState(90);

  function aumentarPorcentagem() {
    setPercent((percent) => (percent += 1));
  }

  function diminuirPorcentagem() {
    if (percent > 100) {
      setPercent(99);
    }
    setPercent((percent) => (percent -= 1));
  }

  const [progressStyle, setProgressStyle] =
    useState<ProgressTypes.StyleType>("percent");

  useEffect(() => {
    if (percent >= 100) {
      setProgressStyle("complete");
    } else {
      setProgressStyle("percent");
    }
  }, [percent]);

  function percentError() {
    setProgressStyle("error");
  }

  const [isVisible, setIsVisible] = useState(false);

  function openModal() {
    setIsVisible(true);
  }

  function closeModal() {
    setIsVisible(false);
  }

  return (
    <Styles.Main>
      <Styles.Container>
        <Typography variant="H1">
          Button Types
        </Typography>

        <Styles.ButtonsContaienr>
          <Styles.BtnColumns>
            <Styles.DivBtns>
              <Typography variant="body-M-regular">
                Main
              </Typography>
              <Button variant="main" size="large">
                Button
              </Button>
              <Button variant="main" size="medium" icon={SaveIcon}>
                Icon
              </Button>
              <Button variant="main" size="small" disabled>
                Disabled
              </Button>
            </Styles.DivBtns>
          </Styles.BtnColumns>

          <Styles.BtnColumns>
            <Styles.DivBtns>
              <Typography variant="body-M-regular">
                Secondary
              </Typography>
              <Button variant="secondary" size="large">
                Button
              </Button>
              <Button variant="secondary" size="medium" icon={SaveIcon}>
                Icon
              </Button>
              <Button variant="secondary" size="small" disabled>
                Disabled
              </Button>
            </Styles.DivBtns>
          </Styles.BtnColumns>

          <Styles.BtnColumns>
            <Styles.DivBtns>
              <Typography variant="body-M-regular">
                Text
              </Typography>
              <Button variant="text" size="large">
                Button
              </Button>
              <Button variant="text" size="large" disabled>
                Disabled
              </Button>
              <Button variant="text" size="large" icon={SaveIcon}>
                Icon
              </Button>
            </Styles.DivBtns>
          </Styles.BtnColumns>

          <Styles.BtnColumns>
            <Styles.DivBtns>
              <Typography variant="body-M-regular">
                Link
              </Typography>
              <Button variant="link" size="large">
                Button
              </Button>
              <Button variant="link" size="large" icon={SaveIcon}>
                Icon
              </Button>
            </Styles.DivBtns>
          </Styles.BtnColumns>
        </Styles.ButtonsContaienr>
      </Styles.Container>

      <Styles.Container>
        <Typography variant="H1">
          Progress Bar Types
        </Typography>
        <Styles.BarsContainer>
          <Styles.DivProgress>
            <ProgressBar percents={percent} style={progressStyle} type="line" />
          </Styles.DivProgress>

          <Styles.DivProgress>
            <ProgressBar
              percents={percent}
              style={progressStyle}
              type="smallLine"
            />
          </Styles.DivProgress>

          <Styles.DivProgress>
            <ProgressBar
              percents={percent}
              style={progressStyle}
              type="circle"
            />
          </Styles.DivProgress>

          <Styles.DivProgress>
            <ProgressBar
              percents={percent}
              style={progressStyle}
              type="smallCircle"
            />
          </Styles.DivProgress>
        </Styles.BarsContainer>

        <Styles.BtnsDiv>
          <Button size="large" variant="main" onClick={aumentarPorcentagem}>
            <Typography variant="body-M-regular">
              Aumentar
            </Typography>
          </Button>
          <Button
            size="large"
            variant="secondary"
            onClick={diminuirPorcentagem}
          >
            <Typography variant="body-M-regular">
              Diminuir
            </Typography>
          </Button>
          <Button size="large" variant="secondary" onClick={percentError}>
            <Typography variant="body-M-regular">
              Error
            </Typography>
          </Button>
        </Styles.BtnsDiv>
      </Styles.Container>

      <Styles.Container>
        <Typography variant="H1">
          Modal
        </Typography>

        <Button size="large" variant="main" onClick={openModal}>
          <Typography variant="body-M-regular">
            Abrir Modal
          </Typography>
        </Button>

        <Modal
          isVisible={isVisible}
          onClose={closeModal}
          img={ModalImg}
          action={
            <Button size="large" variant="secondary" onClick={closeModal}>
              <Typography variant="body-M-regular">
                Perfeito!
              </Typography>
            </Button>
          }
        >
          <Typography variant="H1">
            Modal Aberto!
          </Typography>
          <Typography variant="body-M">
            Totalmente Customizavel
          </Typography>
        </Modal>
      </Styles.Container>

      <Styles.Container>
        <Typography variant="H1">
          Avatar
        </Typography>

        <Styles.DivAvatar>
          <Avatar type="picture" color="default" img={UserImg} />
        </Styles.DivAvatar>

        <Styles.AvatarRow>
          <Styles.DivAvatar>
            <Avatar type="default" color="default" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="default" color="purpleGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="default" color="lightPurpleGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="default" color="greenGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="default" color="orangeGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="default" color="pinkGradient" />
          </Styles.DivAvatar>
        </Styles.AvatarRow>
        <Styles.AvatarRow>
          <Styles.DivAvatar>
            <Avatar type="initials" initial="V8" color="default" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="initials" initial="V8" color="purpleGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="initials" initial="V8" color="lightPurpleGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="initials" initial="V8" color="greenGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="initials" initial="V8" color="orangeGradient" />
          </Styles.DivAvatar>
          <Styles.DivAvatar>
            <Avatar type="initials" initial="V8" color="pinkGradient" />
          </Styles.DivAvatar>
        </Styles.AvatarRow>
      </Styles.Container>
    </Styles.Main>
  );
}
