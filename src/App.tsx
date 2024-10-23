import styled from "styled-components";
import Avatar from "./components/Avatar";

const Teste = styled.div`
  width: 100px;
  height: 100px;
`

export default function App () {

  return (
    <>  
    <Teste>
      <Avatar type="initials" initial="HO" fontSize="32px"/>
    </Teste>
    </>
  )
  }