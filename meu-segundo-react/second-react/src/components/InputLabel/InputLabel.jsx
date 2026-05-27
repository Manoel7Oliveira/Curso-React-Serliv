import styles from "./InputLabel.module.css"

export function InputLabel({ disclaimer, label, value = '0', type = 'text', onValueChange }) {
    return (

        <>
            <div className={styles.inputGroup}>
                <label>Celsius:</label>
                <input type={type} value={value} onChange={(e) => {
                    onValueChange(e.target.value)
                }} />
            </div>
            <span>{disclaimer}</span>
        </>


    )
}