import { useState } from "react";

export default function FormEdit({ task, onSave }) {

    const [text, setText] = useState(task.text);

    return (

        <div>
            <h2>Editando a tarefa com o ID: {task.id}</h2>
           
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={(e) => onSave(task.id, text)}>Salvar</button>

        </div>
        
    )
}