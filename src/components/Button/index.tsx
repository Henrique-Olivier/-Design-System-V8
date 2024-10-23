import styled from "styled-components";
import { theme } from "../colors/colorts";
import React from "react";

type typeBtn = 'main' | 'secondary' | 'text' | 'link';
type typeSize = 'large' | 'medium' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    BtnStyle: typeBtn;
    size: typeSize;
    icon?: string;
}


function setColors(BtnStyle: typeBtn): string {
    switch (BtnStyle) {
        case 'main': return `
        background-color: ${theme.corporate.purple}; 
        color: ${theme.grayscale.white}; 
         border: none;

            &:hover {
             background-color: #AE60EB ;
            }
        
             &:active {   
            background-color: #6A17AB ;
            }
        `;
        case 'secondary': return `
        background-color: ${theme.grayscale.white};
        border: 1px solid ${theme.corporate.purple};
        color: ${theme.corporate.purple};
            &:hover {
             border: 1px solid #AE60EB;
             color: #AE60EB;
            }
        
             &:active {   
            border: 1px solid #6A17AB ;
            color: #6A17AB ;
            }
        `;
        case 'text': return `
        background-color: transparent;
        border: none;
        color: ${theme.corporate.purple};
            &:hover {
             color: #AE60EB;
            }
        
             &:active {   
            color: #6A17AB ;
            }
        `;
        case 'link': return `
        background-color: transparent;
        border: none;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
        color: ${theme.informing.link};
            &:hover {
             color: #1A15D3;
            }
        
             &:active {   
            color: #0F0C9E;
            }
            
        `;
    }
}

function getPadding(size: typeSize, BtnStyle: typeBtn): string {
    const padding = {
        'large': "12px 52px",
        'medium': "8px 28px",
        'small': "4px 11px"
    };

    if (BtnStyle == "text" || BtnStyle == "link") {
        return '0'; 
    } 

    return padding[size];
}

function setHoverForChild(BtnStyle: typeBtn) {
    switch (BtnStyle) {
        case 'secondary': return `

            &:hover div{
             background-color: #AE60EB;
            }
        
             &:active div{   
            background-color: #6A17AB ;
            }
        `;
        case 'text': return `
            &:hover div{
             background-color: #AE60EB;
            }
        
             &:active div{   
            background-color: #6A17AB ;
            }
        `;
        case 'link': return `
          &:hover div{
             background-color: #1A15D3;
            }
        
             &:active div{   
            background-color: #0F0C9E;
            }
            
        `;
    }
} 

const StyledBtn = styled.button<{ $size: typeSize, $BtnStyle: typeBtn }>`
    ${props => setColors(props.$BtnStyle)};
    padding: ${props => getPadding(props.$size, props.$BtnStyle)}; 
    border-radius: 4px;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
    width: 18px;
    height: 18px;
    }

    ${props => setHoverForChild(props.$BtnStyle)}
`

const Icon = styled.div<{$src: string, $BtnStyle: typeBtn}>`
  width: 18px;
  height: 18px;
  mask: url(${props => props.$src}) no-repeat center;
  mask-size: contain;
  ${props => setIconColors(props.$BtnStyle) }; 
`;

function setIconColors(BtnStyle: typeBtn): string { 
    switch (BtnStyle) {
        case 'main': return `
        background-color: ${theme.grayscale.white}; 
        `;

        case 'secondary': return `
        background-color: ${theme.corporate.purple};
        `;
        case 'text': return `
        background-color: ${theme.corporate.purple};
        `;
        case 'link': return `
        background-color: ${theme.informing.link};
        `;
    }
}

export default function Button({ children, BtnStyle, size, icon, ...props }: ButtonProps) {
    return (
        <StyledBtn $size={size} $BtnStyle={BtnStyle} {...props}>
            {icon && <Icon $src={icon} $BtnStyle={BtnStyle}/>}
            {children}
        </StyledBtn>

    )
} 