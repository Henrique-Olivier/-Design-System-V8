import styled from "styled-components"
import { theme } from "../colors/colorts"
import CloseIcon from './assets/close.svg'
import Typography from "../Typography/typography"
import { useState } from "react"

interface ModalProps {
    isVisible: boolean;
} 


const Overlay = styled.div`
    background-color: rgba(0,0,0, 0.5); 
    width: 100vw; 
    height: 100vh; 
    z-index: 9999; 
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
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

export default function Modal({isVisible} : ModalProps) {

    if(!isVisible) return null;

    return (
        <Overlay>
            <Container>
                <CloseButton>
                <img src={CloseIcon}/>
                </CloseButton>
                <ContainerContent>
                    <Typography size="desktop" tag="H2">
                        Congratulations! 
                    </Typography>
                    <Typography size="main" tag="body-M">
                        Descripition of congratulations
                    </ Typography>
                </ContainerContent>
            </Container>
        </Overlay>
    )
}