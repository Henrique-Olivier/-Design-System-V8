import styled from "styled-components";
import { theme } from "../colors/colorts";

type checkboxType = "disabled" | "error";
type checkboxState = "checked" | "undefined";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: checkboxType;
    state: checkboxState;
}

const Container = styled.div`
    display: flex;
    gap: 5px;
`;

const InputElement = styled.input<{ $state: checkboxState }>`
    display: none;

    +label:after{
        content: '';
        position: absolute;
        left: ${props => props.$state === "checked" ? '3px' : '15%'};
        top: ${props => props.$state === "checked" ? '9px' : '49%'};
        width: ${props => props.$state === "checked" ? '6px' : '70%'};
        height: ${props => props.$state === "checked" ? '2px' : '2px'};
        background-color: ${props => props.$state === "checked" ? theme.corporate.purple : theme.grayscale.border};
        transform: ${props => props.$state === "checked" ? 'rotate(45deg)' : null};
    }

    +label:before {
        display: ${props => props.$state === "checked" ? 'block' : 'none'};
        content: '';
        position: absolute;
        left: 9px;
        top: 4px;
        width: 2px;
        height: 10px;
        background-color: ${props => props.$state === "checked" ? theme.corporate.purple : theme.grayscale.border};
        transform: rotate(35deg);
    }
`;

const LabelElement = styled.label<{ $disabled?: boolean }>`
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${props => props.$disabled ? theme.grayscale.border : theme.grayscale.spacer};
    position: relative;
    cursor: pointer;

    background-color: ${props => props.$disabled ? theme.grayscale.disabled : null};
`;

function Checkbox({ type, state, children }: CheckboxProps){
    console.log(state);
    const disabled = type === "disabled";
    const checked = state === "checked";
    return(
        <Container>
            <InputElement disabled={disabled} $state={state} checked={checked} id="checkbox" />
            <LabelElement $disabled={disabled} htmlFor="checkbox"></LabelElement>
            <p>{children}</p>
        </Container>
    );
}

export default Checkbox;