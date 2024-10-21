import styled from "styled-components";
import { theme } from "../colors/colorts";
import React from "react";

type typeBtn = 'main' | 'secondary' | 'text' | 'link';
type typeSize = 'large' | 'medium' | 'small';

interface ButtonProps {
    children: React.ReactNode
    type: typeBtn;
    size: typeSize;
    icon?: any;
}


function setColors(type: typeBtn): string {
    switch (type) {
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

function getPadding(size: typeSize, type: typeBtn): string {
    const padding = {
        'large': "12px 52px",
        'medium': "8px 28px",
        'small': "4px 11px"
    };

    if (type == "text" || type == "link") {
        return '0'; 
    } 

    return padding[size];
}

function setHoverForChild(type: typeBtn) {
    switch (type) {
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

const StyledBtn = styled.button<{ $size: typeSize, $type: typeBtn }>`
    ${props => setColors(props.$type)};
    padding: ${props => getPadding(props.$size, props.$type)}; 
    border-radius: 4px;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    img {
    width: 18px;
    height: 18px;
    }

    ${props => setHoverForChild(props.$type)}
`

const Icon = styled.div<{$src: string, $type: typeBtn}>`
  width: 18px;
  height: 18px;
  mask: url(${props => props.$src}) no-repeat center;
  mask-size: contain;
  ${props => setIconColors(props.$type) }; 
`;

function setIconColors(type: typeBtn): string { 
    switch (type) {
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

export default function Button({ children, type, size, icon }: ButtonProps) {
    return (
        <StyledBtn $size={size} $type={type}>
            {icon && <Icon $src={icon} $type={type}/>}
            {children}
        </StyledBtn>

    )
} 