import styles from "./Button.module.css"

export default function Button({ onClick, children }) {

    return (

        <button className={styles.button} onClick={(e) => onClick(e)}>
            {children}
        </button>
    )
}