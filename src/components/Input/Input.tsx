import { useState } from "react";
import styled from "styled-components";

type inputSize = "default" | "small";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    inputSize: inputSize;

    textLabel?: string;

    textError?: string;

    icon?: string;
    disabled?: boolean;
}

const InputContainer = styled.div<{ $error?: string; $disable: boolean; $isActive: boolean }>`
    display: flex;
    flex-direction: column;
    width: fit-content;
    
    >div{
        display: flex;
        align-items: center;
        width: max-content;
        margin-top: 4px;
        border: ${props => props.$error ? "1px solid red" : "1px solid #E5E0EB"};
        border: ${props => props.$isActive ? "1px solid #9D3FE7" : null};
        background-color: ${props => props.$disable ? "#D4D2D5" : null};

        >div{
            margin-right: 8px;
            background-color: ${props => props.$isActive ? "#9D3FE7" : "#E5E0EB"};
        }
    }

    >p{
        margin: 4px 0 0 0;
        text-align: end;
        color: red;
        font-size: 14px;
    }
    `;

const InputComponent = styled.input<{ $size: string }>`
    width: 167px;
    height: ${props => props.$size === "default" ? "44px" : "36px"};
    padding: ${props => props.$size === "default" ? "12px" : "8px 12px"};
    border-radius: 2px;
    border: none;

    &:focus{
        outline: 0;
    }

    &:disabled{
        background-color: #D4D2D5;
    }
`;

const Icon = styled.div<{ $src?: string; $disable: boolean }>`
  width: 18px;
  height: 18px;
  mask: url(${props => props.$src}) no-repeat center;
  mask-size: contain;
  background-color: ${props => props.$disable ? '#ABA7AF' : null} !important;
`;

function showLabel(textLabel: string | undefined) {
    return textLabel ? <label htmlFor="text">{textLabel}</label> : null;
};

function showError(textError: string | undefined) {
    return textError ? <p>{textError}</p> : null;
};

function Input({ type, inputSize, placeholder, textLabel, textError, icon, disabled=false }: CustomInputProps){
    const [isActive, setIsActive] = useState(false);

    return(
        <InputContainer $error={textError} $disable={disabled} $isActive={isActive}>
            {showLabel(textLabel)}
            <div>
                <InputComponent
                type={type}
                $size={inputSize}
                placeholder={placeholder}
                disabled={disabled}
                onFocus={() => setIsActive(!isActive)}
                onBlur={() => setIsActive(!isActive)}
                />

                <Icon $src={icon} $disable={disabled} />
            </div>
            {showError(textError)}
        </InputContainer>
    )
};

export default Input;