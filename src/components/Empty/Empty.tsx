import styled from "styled-components";

interface propsEmpty {
    iconEmpty: string,
    textEmpty?: string,
    children?: JSX.Element | JSX.Element[],
}

const ContainerEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        margin-top: 16px;
    }
`;

const IconEmpty = styled.img`
    width: 113px;
    height: 113px;
`;

function Empty({ iconEmpty, children }: propsEmpty){
    return(
        <ContainerEmpty>
            <IconEmpty src={iconEmpty} />
            {children}
        </ContainerEmpty>
    );
}

export default Empty;