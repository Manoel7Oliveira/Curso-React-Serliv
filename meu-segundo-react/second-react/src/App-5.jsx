import { useReducer, useState } from 'react'
import FormEdit from "./FormEdit/FormEdit.jsx"
import { initialState, TarefasReducer } from "./Reducers/TarefasReducer.jsx"
import styles from "./FormEdit/FormEdit.module.css"


// const TAREFAS_INICIAIS = [
//   { id: 1, text: "Aprender react" },
//   { id: 2, text: "Aprender js" },
//   { id: 3, text: "Entender propriedades" },
//   { id: 4, text: "Aprender jsx" },
//   { id: 5, text: "Dominar a key" }
// ]


function App() {

  const [selectTask, setSelectTask] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [Task, dispatch] = useReducer(TarefasReducer, initialState);
  // const [taskList, setTaskList] = useState(TAREFAS_INICIAIS);

  function handleSaveTask(id, text) {
    // setTaskList(atual => atual.map(t => t.id === id ? { ...t, text: text } : t));
    dispatch({ type: 'SALVAR_TAREFA', payload: { id, text } });
    setSelectTask(null);
  }

  function handleAdd(e) {
    e.preventDefault();

    if (newTask.trim()) {

      dispatch({
        type: 'ADICIONAR_TAREFA',
        payload: { text: newTask }
      })
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <h1>Minhas tarefas</h1>
        <form onSubmit={handleAdd} className={styles.formAdd}>
          <button type='submit'>Adicionar tarefa</button>
          <input type='text' value={newTask} placeholder='Adicione nova tarefa' onChange={(e) => setNewTask(e.target.value)} />

        </form>


        {Task.map(t => (
          <div key={t.id} className={styles.item}>
            <div onClick={() => setSelectTask(t)}>
              {t.text}

            </div>
            <button onClick={() => dispatch({ type: 'REMOVER_TAREFA', payload: { id: t.id } })}>Excluir</button>
          </div>

        ))}

      </div>

      <div className={styles.edit}>
        {selectTask ? (<FormEdit task={selectTask} onSave={handleSaveTask} key={selectTask.id} />) : (<p>Selecione uma tarefa para editar</p>)}
      </div>
    </div>
  )
}

export default App
