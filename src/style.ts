import styled from "styled-components";

export const WrapperInput = styled.div`
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