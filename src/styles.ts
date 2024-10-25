import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  gap: 35px;
`;

export const DivProgress = styled.div`
  width: 20%;
`;

export const Container = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 20px 50px;
  gap: 50px;
`;

export const BtnsDiv = styled.div`
display: flex;
gap: 12px;
align-items: center;
justify-content: center;
`

export const BarsContainer = styled.div`
display: flex;
gap: 25px;
align-items: center;
width: 100%;
justify-content:center ;
`

export const ButtonsContaienr = styled.div`
display: flex;
align-items: start;
width: 100%;
justify-content:center;
flex-direction: row;
gap: 50px;
`

export const BtnColumns = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;     
    align-items: center;     
`

export const DivBtns = styled.div `
    display: flex;
    gap: 25px;
    justify-content: center;     
    align-items: center; 
    flex-direction: column;    
`

export const DivAvatar = styled.div`
width: 50px;
height: 50px;
`

export const AvatarRow = styled.div`
display:flex;
gap: 10px;
`

export const WrapperInput = styled.div`
  width: 90vw;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: "Poppins", sans-serif;
  margin-top: 30px;
  padding: 30px 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  >div{
    display: flex;
    align-items: flex-end;
    gap: 20px;
  }
`;

export const WrapperCheckbox = styled.div`
  width: 90vw;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 30px 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  >div{
    display: flex;
    align-items: flex-end;
    gap: 20px;
  }
`;

export const WrapperTypography = styled.div`
  width: 90vw;
  border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: "Poppins", sans-serif;
    margin-top: 30px;
    padding: 30px 0;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;

export const WrapperEmpty = styled.div`
  width: 90vw;
  border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    font-family: "Poppins", sans-serif;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px 0;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
`;