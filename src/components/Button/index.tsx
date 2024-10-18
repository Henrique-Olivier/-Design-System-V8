import styled from "styled-components";
import { theme } from "../colors/colorts";
import React from "react";

type typeBtn = 'main' | 'secondary' | 'text';
type typeSize = 'large' | 'medium' | 'small';

interface ButtonProps {
    children: React.ReactNode
    type: typeBtn;
    size: typeSize;
    icon?: any;
}

const padding = {
    'large': "12px 52px",
    'medium': "8px 28px",
    'small': "4px 11px"
}

const StyledBtn = styled.button<{ $size: typeSize, $type: typeBtn }>`
    font-family: "Poppins", sans-serif;
    background-color: ${theme.corporate.purple};
    padding: ${props => padding[props.$size]}; 
    border: none;
    border-radius: 4px;
    color: ${theme.grayscale.white};
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    img {
    width: 18px;
    height: 18px;
    }

    &:hover {
     background-color: #AE60EB ;
    }
        
    &:active {   
    background-color: #6A17AB ;
    }
`

export default function Button({ children, type, size, icon }: ButtonProps) {
    return (
        <StyledBtn $size={size} $type={type}>
            {icon && <img src={icon} />}
            {children}
        </StyledBtn>

    )
} 