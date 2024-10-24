import styled from "styled-components";
import { theme } from "../colors/colorts";

type checkboxType = "default" | "disabled" | "error";
type checkboxState = "empty" | "checked" | "undefined";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: checkboxType;
    state: checkboxState;
}

const Container = styled.div`
    display: flex;
    gap: 5px;
`;

const InputElement = styled.input`
    display: none;
`;

const LabelElement = styled.label<{ $type: checkboxType, $state: checkboxState }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${props => props.$type === "default" ? theme.grayscale.spacer : props.$type === "disabled" ? theme.grayscale.border : theme.informing.error};
    position: relative;
    cursor: pointer;
    background-color: ${props => props.$type === "default" ? null : props.$type === "disabled" ? theme.grayscale.disabled : '#E8A1B6'};

    svg path{
        fill: ${props => props.$type === "default" ? null : props.$type === "disabled" ? theme.grayscale.border : theme.informing.error}
    }
`;

function CheckedIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
      >
        <g clipPath="url(#clip0_3231_5)">
          <path
            fill="#9D3FE7"
            d="M3.396 8.582l-3.25-3.25a.5.5 0 010-.707l.708-.707a.5.5 0 01.707 0l2.189 2.19 4.69-4.69a.5.5 0 01.706 0l.708.707a.5.5 0 010 .707l-5.75 5.75a.5.5 0 01-.708 0z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_3231_5">
            <path fill="#fff" d="M0 0H10V10H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
}

function UndefinedIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="2"
        fill="none"
        viewBox="0 0 10 2"
      >
        <path fill="#9D3FE7" d="M0 0H10V2H0z"></path>
      </svg>
    );
  }

function Checkbox({ type, state, ...props }: CheckboxProps){
    return(
        <Container {...props}>
            <InputElement id="checkbox" />
            <LabelElement $type={type} $state={state} htmlFor="checkbox">{state === "empty" ? null : state === "checked" ? <CheckedIcon/> : <UndefinedIcon/>}</LabelElement>
        </Container>
    );
}

export default Checkbox;