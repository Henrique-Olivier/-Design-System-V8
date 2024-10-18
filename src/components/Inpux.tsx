import styled from "styled-components";
import input_icon from "../assets/Input_Icon.svg";
import input_icon_active from "../assets/Input_Icon_active.svg";

type inputSize = "default" | "small";

interface inputProps {
    size: inputSize;
    label?: boolean;
    error?: boolean;
    icon?: boolean;
    disabled?: boolean;
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;

    >div{
        display: flex;
        align-items: center;
        width: max-content;
        margin-top: 4px;

        >svg{
            margin: 8px;
        }
    }

    >p{
        margin: 4px 0 0 0;
        text-align: end;
        color: red;
        font-size: 14px;
    }
`;

const InputComponent = styled.input<{ $size: string; $icon: boolean, $error:boolean; $disable: boolean }>`
    width: 167px;
    height: ${props => props.$size === "default" ? "44px" : "36px"};
    border: ${props => props.$error ? "1px solid red" : "1px solid #E5E0EB"};
    padding: ${props => props.$size === "default" ? "12px" : "8px 12px"};

    background-image: ${props => props.$icon ? `url(${input_icon})` : null};
    background-repeat: ${props => props.$icon ? "no-repeat" : null};
    background-position: ${props => props.$icon ? "95% center" : null};

    &:focus{
        outline: 0;
        border: 1px solid #9D3FE7;
        background-image: ${props => props.$icon ? `url(${input_icon_active})` : null};
    }

    &:disabled{
        background-color: #D4D2D5;
    }
`;

function showLabel(show: boolean) {
    return show ? <label htmlFor="text">Label</label> : null;
};

function showError(error: boolean) {
    return error ? <p>Error Text</p> : null;
}

function Input({ size, label=false, error=false, icon=false, disabled=false }: inputProps){
    return(
        <InputContainer>
            {showLabel(label)}
            <div>
                <InputComponent $size={size} $icon={icon} $error={error} placeholder="Text" disabled={disabled} $disable={disabled}/>
            </div>
            {showError(error)}
        </InputContainer>
    )
}

export default Input;