import styles from "./InputLabel.module.css"
import { useId } from "react"

export function InputLabel({ disclaimer, label, value = '0', type = 'text', onValueChange }) {

    const idSingle = useId();

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