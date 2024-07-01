import { useState } from 'react'
import './App.css'
import ConfirmModal from './components/ConfirmModal/ConfirmModal'
import Modal from './components/Modal/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleConfirm() {
    console.log("Confirmed");
    setIsModalOpen(false)
  }

  function handleCancel() {
    setIsModalOpen(false);
  }

  function handleOpenSecondModal() {
    setIsSecondModalOpen(true);
  }

  function handleSecondModalClose() {
    setIsSecondModalOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Open modal</button>
      <button onClick={handleOpenSecondModal}>Open modal 2</button>
      {
        isModalOpen && <ConfirmModal onCancel={handleCancel} onConfirm={handleConfirm} text={"Ar tikrai norite kazka daryti?"} />
      }
      <Modal open={isSecondModalOpen} handleClose={handleSecondModalClose}>
        <h1>Some text</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit asperiores fugiat! Numquam voluptas sed voluptatum eius cumque quisquam ea consequuntur nam iure. Ex aut ducimus reprehenderit! Voluptas, fugit natus.</p>
      </Modal>
    </div>
  )
}

export default App
