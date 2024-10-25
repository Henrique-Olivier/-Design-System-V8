import Input from "./components/Input";
import icon from "./components/assets/Input_Icon.svg";
import empty from "./components/assets/Empty.svg";
import icon_button from "./components/assets/Icon button.svg";
import Checkbox from "./components/Checkbox";
import * as S from "./style";
import Typography from "./components/Typography";
import Empty from "./components/Empty";
import Button from "./components/Button";
import ProgressBar from "./components/Progress";
import { useEffect, useState } from "react";
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
      <Typography variant="H1">
      Design System
      </Typography>

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
              <Button variant="text" size="large" icon={SaveIcon}>
                Icon
              </Button>
              <Button variant="text" size="large" disabled>
                Disabled
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
      
      
       <S.WrapperInput>
        <h2>Input Component</h2>
        <div>
          <Input height="default" placeholder="Text" icon={icon} />
          <Input height="default" placeholder="Text" icon={icon} />
          <Input height="default" placeholder="Text" icon={icon} disabled />
          <Input height="default" placeholder="Text" icon={icon} textLabel="Text" />
          <Input height="default" placeholder="Text" icon={icon} textError="Error" />
        </div>

        <div>  
          <Input height="small" placeholder="Text" />
          <Input height="small" placeholder="Text" />
          <Input height="small" placeholder="Text" disabled />
          <Input height="small" placeholder="Text" textLabel="Text" />
          <Input height="small" placeholder="Text" textError="Error" />
        </div>
      </S.WrapperInput>

      <S.WrapperCheckbox>
        <h2>Checkbox Component</h2>
        <div>
          <Checkbox id="testando01" />
          <Checkbox id="testando02" defaultChecked />
          <Checkbox id="testando03" defaultChecked disabled />
          <Checkbox id="testando04" defaultChecked error />
        </div>

        <div>
          <Checkbox type="undefined" id="testando05"/>
          <Checkbox type="undefined" id="testando06" defaultChecked />
          <Checkbox type="undefined" id="testando07" defaultChecked disabled />
          <Checkbox type="undefined" id="testando08" defaultChecked error />
        </div>
      </S.WrapperCheckbox>

      <S.WrapperTypography>
        <h1>Typography Component</h1>
        <Typography variant="H1">
          Heading 1
        </Typography>

        <Typography variant="H2">
          Heading 2
        </Typography>

        <Typography variant="H3">
          Heading 3
        </Typography>

        <Typography variant="H4">
          Heading 4
        </Typography>

        <Typography variant="body-L">
          Body-L
        </Typography>

        <Typography variant="body-M">
          Body-M
        </Typography>

        <Typography variant="body-M-regular">
          Body-M-regular
        </Typography>

        <Typography variant="body-S">
          Body-S
        </Typography>

        <Typography variant="body-S-regular">
          Body-S-regular
        </Typography>

        <Typography variant="body-XS">
          Body-XS
        </Typography>
      </S.WrapperTypography>

      <S.WrapperEmpty>
        <h2>Empty Component</h2>
        <Empty icon={empty}></Empty>
        <Empty icon={empty} text="Nothing Here!"></Empty>
        <Empty icon={empty} text="Nothing Here!">
          <Button size="medium" variant="main" icon={icon_button}>
            Create
          </Button>
        </Empty>
      </S.WrapperEmpty>
    </Styles.Main>
  );
}

