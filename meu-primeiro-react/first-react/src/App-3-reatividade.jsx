import { useState } from "react";
import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {

    // let contador = 0
    function incrementar() {
        // contador++
        // console.log("Contador:", contador)
        // hook[1](hook[0] + 1)
        setCont(cont + 1);
    }

    //const hook = useState(0) // retorna um array com dois valores,o primeiro valor é o valor da variavel
    // O segundo valor é uma função que sera usada para alterar o valor ou estado da variavel

    const [cont, setCont] = useState(0)
    // console.log(changeValue)

    return (
        <>
            {/*<Button text="Incrementar" onClique={incrementar} />*/}  {/*importei o button do arquivo Button.jsx*/}
            <Button disable={cont >= 20} text="Incrementar" onClique={() => { setCont(cont + 1) }} />
            <Button disable={cont <= 0} text="Decrementar" onClique={() => { setCont(cont - 1) }} />
            <h1>Contador: {cont}</h1>

            <Card titulo={'Contador:' + cont} />

        </>
    )
}

export default App 