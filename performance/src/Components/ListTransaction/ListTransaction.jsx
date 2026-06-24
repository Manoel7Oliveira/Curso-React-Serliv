import { memo } from "react";
import styles from "./../../pages/Darshboard/Dashboard.module.css"

const ItemTransaction = ({ data, onDelete }) => {

    return (
        <li className={styles.listItem}>
            <div>
                <b>{data.client}</b>
                <p>{data.date}</p>
            </div>

            <div>
                <p className={styles.amount}>{data.amount}</p>
                <p className={styles.status}>{data.status}</p>
                <button className={styles.deleteBtn} onClick={() => onDelete(data.id)}>Excluir</button>
            </div>
        </li>
    )
}

const ListTransaction = memo(({ items, onDelete }) => {
    console.log('ListTransaction renderizado');
    return (

        <ul className={styles.list}>
            {items.map(item => <ItemTransaction key={item.id} data={item} onDelete={onDelete} />)}
        </ul>
    )
});

// o memo é usado para memorizar o componente, evitando que ele seja re-renderizado desnecessariamente quando as props não mudam. 
// Isso é útil para otimizar o desempenho, especialmente em listas
// Ele é diferebte do useMemo, que é usado para memorizar valores ou funções,
// enquanto o memo é usado para memorizar componentes.

export default ListTransaction