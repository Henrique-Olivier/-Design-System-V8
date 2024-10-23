import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Typography from "./components/Typography/typography";

export default function App () {
  const [isVisible, setIsVisible] = useState(true)

  function closeModal() {
    setIsVisible(false);
  } 

  function openModal () {
    setIsVisible(true);
  }

  return (
    <>
    <button onClick={openModal}>
      abrir modal
    </button>
    <Modal isVisible={isVisible} onClose={closeModal}>
        <Button size='large' BtnStyle="secondary" onClick={closeModal}>
          <Typography size="main" tag="body-M-regular">Okay</Typography>
        </Button>
      </Modal>
    </>

    
  )
  }