import Button from "./components/Button";
import icon from "./assets/save.svg"

export default function App () {
    return  (
    <Button size='small' 
    type='text'
    icon={icon}
    > 
      <span>Button</span>
    </Button> 
    )
  }