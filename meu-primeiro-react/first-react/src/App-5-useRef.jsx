import React, { useEffect, useRef, useState } from "react";
import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {

    const [cont, setCont] = useState(0)

    useEffect(() => {
        console.log('Ciclo de vida do componente alterado');
    })

    let contador = useRef(0)
    console.log(contador)
    console.log(contador.current)

    function btnClicadoRef() {
        contador.current = contador.current + 1
        console.log(contador)
        console.log('clicado', contador.current, "vezes")
    }

    function btnClicadoState() {
        setCont(cont + 1)
        console.log('clicado com render')
    }

    return (
        <React.Fragment>
            <Button text="Incrementar sem render (useRef)" onClique={btnClicadoRef} />
            <Button text="Incrementar com render (useState) " onClique={btnClicadoState} />
        </React.Fragment>
    )
}

export default App 