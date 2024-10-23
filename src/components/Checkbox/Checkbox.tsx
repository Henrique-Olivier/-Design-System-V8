import styled, { css } from "styled-components";
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

const stateCheckboxMapping = {
    empty: null,
    checked: {
        after: css`
            content: '';
            position: absolute;
            left: 3px;
            top: 9px;
            width: 6px;
            height: 2px;
            background-color: ${theme.corporate.purple};
            transform: rotate(45deg);
        `,
        before: css`
            display: block;
            content: '';
            position: absolute;
            left: 9px;
            top: 4px;
            width: 2px;
            height: 10px;
            background-color: ${theme.corporate.purple};
            transform: rotate(35deg);
        `
    },
    undefined: css`
        content: '';
        position: absolute;
        left: 7px;
        top: 4px;
        width: 2px;
        height: 10px;
        background-color: ${theme.corporate.purple};
        transform: rotate(90deg);
    `
}

const InputElement = styled.input<{ $state: checkboxState, $type: checkboxType }>`
    display: none;

    +label:after{
        ${props => props.$state === "empty" ? stateCheckboxMapping["empty"] : props.$state === "checked" ? stateCheckboxMapping["checked"]["after"] : stateCheckboxMapping["undefined"]}
        background-color: ${props => props.$type === "default" ? null : props.$type === "disabled" ? theme.grayscale.border : theme.informing.error};
    }

    +label:before {
        ${props => props.$state === "checked" ? stateCheckboxMapping["checked"]["before"] : null};
        background-color: ${props => props.$type === "default" ? null : props.$type === "disabled" ? theme.grayscale.border : theme.informing.error};
    }
`;

const LabelElement = styled.label<{ $type: checkboxType }>`
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${props => props.$type === "default" ? theme.grayscale.spacer : props.$type === "disabled" ? theme.grayscale.border : theme.informing.error};
    position: relative;
    cursor: pointer;

    background-color: ${props => props.$type === "default" ? null : props.$type === "disabled" ? theme.grayscale.disabled : '#E8A1B6'};
`;

function Checkbox({ type, state }: CheckboxProps){
    return(
        <Container>
            <InputElement $type={type} $state={state} id="checkbox" />
            <LabelElement $type={type} htmlFor="checkbox"></LabelElement>
        </Container>
    );
}

export default Checkbox;