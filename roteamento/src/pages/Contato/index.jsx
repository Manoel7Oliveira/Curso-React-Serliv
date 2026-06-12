import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Contato() {

    const [enviando, setEnviando] = useState(false);
    const navigate = useNavigate();

    // O useNavigate é um hook do React Router que permite navegar programaticamente para outras rotas.
    // Ele retorna uma função que pode ser chamada para navegar para uma rota específica.
    // A função aceita um argumento que pode ser uma string representando a URL ou um número representando o número de passos 
    // a navegar no histórico.

    function handleSubmit(e) {
        e.preventDefault();

        setEnviando(true);

        setTimeout(() => {
            alert('Mensagem enviada');
            navigate('/');
        }, 2000);

    }

    return (
        <section>
            <h1>Entre em contato</h1>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Digite o usuario" required /><br></br><br />
                <textarea placeholder="Digite sua mensagem" required></textarea><br />
                <button disabled={enviando}>{enviando ? "Aguarde..." : "Enviar"}</button><br />

                <button onClick={() => { navigate(-1) }}>Voltar para pagina anterior</button>

            </form>

        </section>
    )
}

export default Contato