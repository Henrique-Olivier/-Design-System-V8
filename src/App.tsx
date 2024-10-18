import Button from "./components/Button";
import Save from './assets/save.svg'

export default function App () {
    return  (
    <Button size='large' type='main' icon={Save}> 
      <span>Button</span>
    </Button> 
    )
  }