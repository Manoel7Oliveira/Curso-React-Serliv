export const initialState = [
    { id: 1, text: "Aprender react" },
    { id: 2, text: "Aprender js" },
    { id: 3, text: "Entender propriedades" },
    { id: 4, text: "Aprender jsx" },
    { id: 5, text: "Dominar a key" }
]

export function TarefasReducer(state, action) {

    switch (action.type) {
        case 'SALVAR_TAREFA':
            return state.map(t => t.id === action.payload.id ? { ...t, text: action.payload.text } : t);
        case 'REMOVER_TAREFA':
            return state.filter(t => t.id !== action.payload.id);
        case 'ADICIONAR_TAREFA':
            const newTask = {
                id: Date.now(),
                text: action.payload.text
            }
            return [...state, newTask]

        default:
            return state
    }

}