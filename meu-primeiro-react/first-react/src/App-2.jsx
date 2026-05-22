import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {

    function buttonClicado() {
        console.log('Button clicado app')
    }

    return (
        <>
            <Button text="Salvar" disable />  {/*importei o button do arquivo Button.jsx*/}
            <Button text="Salvar 2" onClique={buttonClicado} />
            <Button text="Salvar 3" />
            <Button disable />
            <Card titulo="titulo 1" descrição="descrição 1" />
            <Card titulo="titulo 2" descrição="descrição 2" />
            <Card titulo="titulo 3" descrição="descrição 3" />
        </>
    )
}

export default App 