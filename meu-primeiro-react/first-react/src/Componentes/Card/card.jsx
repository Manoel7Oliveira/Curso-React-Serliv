import Button from "../Button/Button"
import styles from "./Card.module.css"

function Card({titulo, descrição}) {
    console.log(titulo, descrição)
    return (

        <div className={styles.card}>

            <h1 className={styles.title}>{titulo}</h1>
            <p>{descrição}</p>
            <Button/>

        </div>
    )
}

export default Card