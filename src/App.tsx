import Input from "./components/Input";
import icon from "./components/assets/Input_Icon.svg";
import empty from "./components/assets/Empty.svg";
import icon_button from "./components/assets/Icon button.svg";
import Checkbox from "./components/Checkbox";
import * as S from "./style";
import Typography from "./components/Typography";
import Empty from "./components/Empty";
import Button from "./components/Button";


export default function App () {

  return (
    <>
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

    </>
  )
  }