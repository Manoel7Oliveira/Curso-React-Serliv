import { useState } from "react";
import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {

    // let contador = 0
    function incrementar() {
        // contador++
        // console.log("Contador:", contador)



        hook[1](hook[0] + 1)


    }

    const hook = useState(0)
    console.log(hook)

    return (
        <>
            <Button text="Incrementar" onClique={incrementar} />  {/*importei o button do arquivo Button.jsx*/}
            <Button text="Decrementar" />
            <h1>Contador: {hook[0]}</h1>

            <Card titulo={'Contador:' + hook[0]}/>

        </>
    )
}

export default App 