import styles from "./Button.module.css"  // Esse é o css module, é uma forma de evitar
//  vazamento quando colocamos classes com o mesmo nome. Essa é a sintaxe de importação. E a sintaxe pra usar é className={styles.nomedaclassaqui}

function Button() {

    return (
        <button className={styles.btn}>
            <span className={styles.title}>Click</span>
        </button>
    )
}

export default Button