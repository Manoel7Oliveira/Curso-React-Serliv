import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {
    
    return (
        <>
            <Button />  {/*importei o button do arquivo Button.jsx*/}
            <Button />
            <Button />
            <Card titulo="titulo 1" descrição="descrição 1" />
            <Card titulo="titulo 2" descrição="descrição 2" />
            <Card titulo="titulo 3" descrição="descrição 3" />
        </>
    )
}

export default App 