import styled from "styled-components"
import { theme } from "../colors/colorts"
import CloseIcon from './assets/close.svg'
import React from "react"

interface ModalProps {
    children: React.ReactNode;
    isVisible: boolean;
    onClose: () => void;
} 


const Overlay = styled.div`
    background-color: rgba(26,20,31, 0.7); 
    width: 100vw; 
    height: 100vh; 
    z-index: 9998; 
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999; 
    box-sizing: border-box;
    background-color: ${theme.grayscale.white}; 
    width: 460px;
    height: fit-content;
    padding: 16px;
    border-radius: 8px; 
    text-align: end;

    img {
    width: 16px;
    height: 16px;
    } 
`

const ContainerContent = styled.div`
    padding: 20px 36px; 
    width: 100%;  
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px; 
`

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer; 
`



export default function Modal({children, isVisible, onClose} : ModalProps) {

    if(!isVisible) return null;

    return (
        <>
        <Overlay onClick={onClose}>
        </Overlay>
            <Container>
                <CloseButton onClick={onClose}>
                <img src={CloseIcon}/>
                </CloseButton>
                <ContainerContent>
                    {children}
                </ContainerContent>
            </Container>
        </>
    )
}