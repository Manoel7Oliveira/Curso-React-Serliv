import React, { useEffect, useRef } from "react";
import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {

    const inputRef = useRef(null)
    console.log(inputRef) // Aqui o inputRef é nulo
    console.log(inputRef.current)

    useEffect(() => inputRef.current.focus(), []) // focus no useEffect, assim que a pagina é carregada ele ja da o focus
    // sem necessidade do click no botao


    function Focus() {
        inputRef.current.focus()
        console.log(inputRef.current)
    }


    return (

        <>

            <input type="text" ref={inputRef} />
            <button onClick={Focus}>Focus</button>

        </>
    )
}

export default App 