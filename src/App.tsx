import styled from "styled-components";
import ProgressBar from "./components/Progress";

const Container = styled.div`
  width: 90vw; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
`

export default function App () {
  return (
    <>  
    <Container>
      <div>
        <ProgressBar percents={50} style="complete" type="line"/>
      </div>
    </Container>
    </>
  )
}