import styles from './InputWithPills.module.css'
import { useState, useRef } from 'react'

export default function InputWithPills() {

    // State que guarda todas as tags
    // Ex: ['react', 'js', 'css']
    const [tags, setTags] = useState([]);
    // Referência para acessar o input diretamente pelo DOM
    const inputRef = useRef(null);

    function handleKeyDown(e) {

        if (e.key === ',') {
            e.preventDefault(); // Evita de deixar a virgula no input
            // Pega o valor atual do input
            // trim() remove espaços no começo e no final
            const novaTag = inputRef.current.value.trim();
            console.log(novaTag);

            // Verifica se existe algum texto
            // Evita tags vazias
            if (novaTag) {
                tags.push(novaTag);

                console.log(tags);
                inputRef.current.value = ''
                // Isso é importante porque o React
                // precisa de uma NOVA referência
                setTags([...tags]) // O react nao permite que o state seja modificado, ele o trata como imutavel.
                // Aqui no setTags Passamos um spread, basicamente dizendo olha react, um novo array, ou seja uma nova referencia
                // se passarmos apenas tags, sem o spread, o react identificaria como se fosse o mesmo array de antes, sem nenhuma mudança
                // E tambem, ele nao permite que a array orignal seja modificada com outros metodos.

                // O setTags é a forma correta de alterar o state.
                // Mas o React espera que você entregue um NOVO valor.
                // Não modificar o antigo e devolver ele mesmo.

            }
        }


    }

    function removerTag(_, index) {
        tags.splice(index, 1)
        setTags([...tags])
    }


    return (
        <>
            <input placeholder='Separe as tags por virgula' ref={inputRef} type="text" onKeyDown={handleKeyDown} />

            <div className={styles.container}>
                {tags.map((tag, index) => (

                    <span className={styles.pill} key={index}>
                        {tag} - <button onClick={() => removerTag(tag, index)}> X </button>
                    </span>
                ))}

            </div>


        </>
    )
}