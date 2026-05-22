import styles from "./Button.module.css"  // Esse é o css module, é uma forma de evitar
//  vazamento quando colocamos classes com o mesmo nome. Essa é a sintaxe de importação. E a sintaxe pra usar é className={styles.nomedaclassaqui}

function btnClicado () {
    console.log('btn')
}


function Button({ text = "Click default", disable }) {

    function btnClicado () {
    console.log('btn', text)
}

    return (
        //<button className={styles.btn} disabled={disable}>
        <button onClick={() => btnClicado()} className={`${styles.btn} ${disable ? styles.disable : ""}`} disabled={disable}>
            <span className={styles.title}>{text} - {disable} - {typeof disable} </span>
        </button>
    )
}

export default Button