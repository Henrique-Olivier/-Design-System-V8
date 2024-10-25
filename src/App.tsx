import styled from "styled-components";
import Input from "./components/Input";
import icon from "./components/assets/Input_Icon.svg";
import Checkbox from "./components/Checkbox";

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: "Poppins", sans-serif;

  >div{
    display: flex;
    align-items: flex-end;
    gap: 20px;
  }
`;

const WrapperCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 80px;

  >div{
    display: flex;
    align-items: flex-end;
    gap: 20px;
  }
`;

export default function App () {

  return (
    <>
      <WrapperInput>
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
      </WrapperInput>

      <WrapperCheckbox>
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
      </WrapperCheckbox>
    </>
  )
  }