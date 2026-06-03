export const initialState = {
    nome: '',
    email: '',
    status: 'aguardando',
    erro: null,
    tentativas: 0
}

export function registroReducer(state, action) {

    switch (action.type) {
        case 'CAMPO_ALTERADO':
            return { ...state, [action.campo]: action.valor }
        case 'INICIAR_ENVIO':
            return { ...state, status: 'enviando', erro: null, tentativas: state.tentativas + 1 }
        case 'SUCESSO':
            return { ...initialState, status: 'sucesso' }
        case 'ERRO':
            return { ...state, status: 'aguardando', erro: action.mensage }
        case 'RESET':
            return { ...initialState }
        default:
            return state
    }
}