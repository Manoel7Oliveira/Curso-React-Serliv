import { useState } from "react"
import Modal from "./Modal/Modal.jsx"
import Card from "./Componentes/Card/Card.jsx"


function App() {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenCard, setIsOpenCard] = useState(false)


    return (

        <>
            <h1>Exemplo de Modal</h1>
            <button onClick={() => setIsOpen(true)}>Abrir modal</button>

            <Modal isOpen={isOpen}>
                <h2>Mensagem importante</h2>
                <p>Leia atentamente!</p>
                <button onClick={() => setIsOpen(false)}>Entendido</button>
            </Modal>

            <button onClick={() => setIsOpenCard(true)}>Abrir modal Card</button>
            <Modal isOpen={isOpenCard}>
                <h2>Mensagem importante de dentro do Card</h2>
                <p>Leia atentamente!</p>
                <button onClick={() => setIsOpenCard(false)}>Entendido</button>


                <Card titulo="Titulo do card interno" descrição="Descrição" />
            </Modal>



        </>
    )
}

export default App 