import styles from "./Modal.module.css"

export default function Modal({ isOpen, children }) {
    console.log(children)
    if (!isOpen) return null

    return (
        <>

            <div className={styles.modalOverlay}>

                <div className={styles.modalBody}>
                    <h3>Meu modal</h3>
                    {children}
                </div>

            </div>


        </>
    )

}