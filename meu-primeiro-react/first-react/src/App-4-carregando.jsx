import { useEffect, useState } from "react";
import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {

    const [loading, setLoading] = useState(true);
    const [cont, setCont] = useState(0);

    // useEffect(() => {}, []) // A primeiro parametro é um função, o segundo é um array de dependencias.
    // Quando passamos o array vazio, basicamente dizemos, executa o primeiro parametro (function), 
    // somente quando o componente é montado em tela ou seja, no primeiro render

    useEffect(() => {
        const id = setTimeout(() => {
            console.log('setTimeout');
            setLoading(false);
        }, 3000)

        return () => {
            clearTimeout(id)
        }
    }, [])

    useEffect(() => {
        console.log("loading", loading)
    }, [loading]);

    useEffect(() => {
        console.log("UseEffect sem nenhuma dependencia")
    },);

    useEffect(() => {
        console.log("Contador alterado", cont)
    }, [cont]);

    useEffect(() => {
        console.log("Contador ou carregando alterado")
    }, [cont, loading]);


    return (
        <>

            { /*

            1. Montagem (Mount)
            → componente é criado e aparece na tela

            2. Atualização (Update)
            → componente renderiza novamente por mudança de:
            - state
            - props
            - contexto

            3. Desmontagem (Unmount)
            → componente é removido da tela

         */}

            {loading ? (<p>Loading...</p>) : (
                <>
                    <h1>Site loaded successfully.</h1>
                    <p>All the content on the site</p>
                    <p>Contador: {cont}</p>
                    {cont < 5 ? (<Button text="Incrementar" onClique={() => setCont(cont + 1)} />) : ('Botao removido')}
                </>
            )}


        </>
    )
}

export default App 