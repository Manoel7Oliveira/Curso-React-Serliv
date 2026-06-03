import { useReducer } from 'react'
import { initialState, registroReducer } from "./Reducers/RegistroReducer.jsx"



function App() {

  const [state, dispatch] = useReducer(registroReducer, initialState);
 
  // useReducer é um hook do React que é usado para gerenciar o estado de um componente.
  //  Ele é uma alternativa ao useState e é especialmente útil quando o estado é complexo 
  // ou quando as atualizações de estado dependem do estado anterior.

  // O useReducer recebe dois argumentos: o primeiro é a função reducer, 
  // que é responsável por atualizar o estado com base em uma ação, e o segundo é o estado inicial. 
  // Ele retorna um array com dois elementos: o estado atual e a função dispatch, que é usada para enviar ações para o reducer.

  // No exemplo acima, o estado inicial é definido como um objeto com as propriedades nome, email, status, erro e tentativas.
  // A função registroReducer é a função reducer que lida com as ações para atualizar o estado. 
  // Ela recebe o estado atual e uma ação como argumentos e retorna um novo estado com base na ação.

  // A função dispatch é usada para enviar ações para o reducer. 
  // Por exemplo, para atualizar o campo nome, você pode usar dispatch({ type: 'CAMPO_ALTERADO', campo: 'nome', valor: 'Novo Nome' }).

  async function handleSubimit(e) {
    e.preventDefault();

    dispatch({ type: 'INICIAR_ENVIO' });

    try {
      // Simulaçao de API
      await new Promise(resolve => setTimeout(resolve, 2000));
      dispatch({ type: 'SUCESSO' });

      await new Promise(resolve => setTimeout(resolve, 2000));
      dispatch({ type: 'RESET' });
    } catch (err) {
      dispatch({ type: 'ERRO', mensage: 'falha ao enviar' });
    }

  }

  return (
    <>
      <form onSubmit={handleSubimit}>
        <input value={state.nome} placeholder='nome' onChange={(e) => dispatch({ type: 'CAMPO_ALTERADO', campo: 'nome', valor: e.target.value })} type="text" />
        <input value={state.email} placeholder='email' onChange={(e) => dispatch({ type: 'CAMPO_ALTERADO', campo: 'email', valor: e.target.value })} type="email" />

        <button disabled={state.status === 'enviando' || state.nome.length === 0 || state.email.length === 0}>
          {state.status === 'enviando' ? "Cadastrando..." : 'Enviar'}
        </button>

        {state.status === 'sucesso' ? (<p style={{ color: 'green' }}>Mensagem enviada com sucesso</p>) : null}
        {state.status === 'erro' ? (<p style={{ color: 'red' }}>Erro ao enviar a mensagem: {state.erro}</p>) : null}
        <p>Tentativas de envio: {state.tentativas}</p>
        <p>{state.status}</p>
      </form>



    </>
  )
}

export default App
