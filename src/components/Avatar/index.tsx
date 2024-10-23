import styled from "styled-components"

interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}


const AvatarDiv = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: red;
` 

export default function Avatar () {
    return (
        <AvatarDiv>

        </AvatarDiv>
    ) 
}