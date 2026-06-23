import { memo } from "react";
import styles from "./../../pages/Darshboard/Dashboard.module.css"

const ItemTransaction = ({ data }) => {

    return (
        <li className={styles.listItem}>
            <div>
                <b>{data.client}</b>
                <p>{data.date}</p>
            </div>

            <div>
                <p className={styles.amount}>{data.amount}</p>
                <p className={styles.status}>{data.status}</p>
            </div>
        </li>
    )
}

const ListTransaction = memo(({ items }) => {
    console.log('ListTransaction renderizado');
    return (

        <ul className={styles.list}>
            {items.map(item => <ItemTransaction key={item.id} data={item} />)}
        </ul>
    )
});

// o memo é usado para memorizar o componente, evitando que ele seja re-renderizado desnecessariamente quando as props não mudam. 
// Isso é útil para otimizar o desempenho, especialmente em listas

export default ListTransaction