import styled from "styled-components";
import ProgressBar from "./components/Progress";


const Teste = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid #f1f1f1;
`

export default function App () {

  return (
    <>  
    <Teste>
      <ProgressBar percents={49} style="percent" type="circle"/>
    </Teste>
    </>
  )
  }