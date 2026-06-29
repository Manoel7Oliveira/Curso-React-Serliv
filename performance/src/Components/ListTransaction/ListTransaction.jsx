import { memo } from "react";
import styles from "./../../pages/Darshboard/Dashboard.module.css"

const ItemTransaction = memo(({ data, onDelete }) => {
    // Usando para testar processamentos pesados
    const processedData = () => {
        return Array.from({ length: 100 }, (_, i) => ({
            id: i,
            value: Math.floor(Math.random() * 10)
        }));
    }

    console.log('ItemTransaction renderizado');

    return (
        <li className={styles.listItem}>
            <div>
                <b>{data.client}</b>
                <p>{data.date}</p>
            </div>

            <div>
                <p >{(processedData().map(p => p.value).join('').substring(0, 10))}</p>
                <p className={styles.amount}>{data.amount}</p>
                <p className={styles.status}>{data.status}</p>
                <button className={styles.deleteBtn} onClick={() => onDelete(data.id)}>Excluir</button>
            </div>
        </li>
    )
}
)


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
// Ele é diferente do useMemo, que é usado para memorizar valores ou funções,
// enquanto o memo é usado para memorizar componentes.

export default ListTransaction