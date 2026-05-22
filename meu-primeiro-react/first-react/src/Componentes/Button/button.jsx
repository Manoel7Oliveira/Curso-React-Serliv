import styles from "./Button.module.css"  // Esse é o css module, é uma forma de evitar
//  vazamento quando colocamos classes com o mesmo nome. Essa é a sintaxe de importação. E a sintaxe pra usar é className={styles.nomedaclassaqui}

function Button({ text = "Click default", disable }) {

    return (
        //<button className={styles.btn} disabled={disable}>
        <button className={`${styles.btn} ${disable ? styles.disable : ""}`} disabled={disable}>
            <span className={styles.title}>{text} - {disable} - {typeof disable} </span>
        </button>
    )
}

export default Button