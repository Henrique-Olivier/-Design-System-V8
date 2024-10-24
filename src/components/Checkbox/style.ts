import styled from "styled-components";
import { theme } from "../colors/colorts";

export const Container = styled.div`
    display: flex;
    gap: 5px;
`;

export const InputElement = styled.input`
    display: none;

    &:disabled +label{
        background-color: ${theme.grayscale.disabled};
    }

    &:checked +label{
        background-color: red;
        svg path{
            fill: transparent;
        }
    }
`;

export const LabelElement = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid ${theme.grayscale.border};
    position: relative;
    cursor: pointer;

    >input:disabled{
        background-color: ${theme.grayscale.disabled};
    }
`;