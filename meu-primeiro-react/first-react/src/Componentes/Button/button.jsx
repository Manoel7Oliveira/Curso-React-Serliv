import { useEffect } from "react";
import styles from "./Button.module.css"  // Esse é o css module, é uma forma de evitar
//  vazamento quando colocamos classes com o mesmo nome. Essa é a sintaxe de importação. E a sintaxe pra usar é className={styles.nomedaclassaqui}

/*
Isso esta incorreto, o certo é o useEffect
window.addEventListener("resize", () => {console.log('resize')})
*/
function Button({ text = "Click default", disable = '', onClique }) {
    // A função aqui dentro, pode acessar as props do componente. 

    const fn = () => { console.log('resize') }

    useEffect(() => {
        window.addEventListener('resize', fn);

        return () => {
            window.removeEventListener('resize', fn);
        }

    }, [])

    function btnClicado() {
        console.log('btn', text)

        if (onClique && typeof onClique === 'function') {
            onClique();
        }

    }

    return (
        //<button className={styles.btn} disabled={disable}>
        <button onClick={() => btnClicado()} className={`${styles.btn} ${disable ? styles.disable : ""}`} disabled={disable}>
            {/*<span className={styles.title}>{text} - {disable} - {typeof disable} </span>*/}
            <span className={styles.title}>{text}</span>
        </button>
    )
}

export default Button