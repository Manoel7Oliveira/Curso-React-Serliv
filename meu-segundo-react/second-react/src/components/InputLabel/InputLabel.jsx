import styles from "./InputLabel.module.css"
import { useId } from "react"

export function InputLabel({ disclaimer, label, value = '0', type = 'text', onValueChange }) {

    const idSingle = useId();

    // useId é um hook do React que gera um ID único para cada componente.
    // Ele é útil para associar rótulos a elementos de formulário, 
    // garantindo acessibilidade e evitando conflitos de ID em casos de renderização condicional ou múltiplas
    // instâncias do mesmo componente.



    return (

        <>
            <div className={styles.inputGroup}>
                <label htmlFor={idSingle}>Celsius:</label>
                <input id={idSingle} type={type} value={value} onChange={(e) => {
                    onValueChange(e.target.value)
                }} />
            </div>
            <span>{disclaimer}</span>
        </>


    )
}