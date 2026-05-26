import { useEffect, useState, useRef } from "react"
import styles from "./FormTextarea.module.css"

export default function FormTextarea() {

    const [response, setResponse] = useState('');
    const [status, setStatus] = useState('Waiting');
    const textareaFocus = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        setStatus('Sending');


        setTimeout(() => {
            setStatus('Sent successfully');
        }, 3000);
    }

    useEffect(() => {
        textareaFocus.current.focus()

        console.log('renderizou');
    }, [])

    return (

        <>
            <form className={styles.container} onSubmit={handleSubmit}>
                <h2>Feedback do curso de React</h2>
                <label htmlFor="feedback"></label>
                <textarea name="feedback" id="feedback" value={response} ref={textareaFocus} onChange={(e) => {
                    setResponse(e.target.value);

                    if (e.target.value.length === 0) {
                        setStatus('Waiting');
                    }
                }} disabled={status === 'Sent successfully'}>

                </textarea>

                {status !== 'Sent successfully' ? (
                    <button disabled={!response.length || status === 'Sending'} >
                        {status === 'Waiting' || status === 'Sent successfully' ? "Send" : "Please wait a moment"}

                    </button>
                ) : null}

                {status === 'Sending' ? (<p>We are sending your message.</p>) : ''}
                <p>{status}</p>

            </form>
        </>
    )
}