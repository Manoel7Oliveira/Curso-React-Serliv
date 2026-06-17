import { use } from "react"
import styles from "./produtoDetalhes.module.css"

function ProdutoDetalhesConteudo({ produtoPromise }) {

    const produto = use(produtoPromise);

    // o use é utilizado para consumir a promise do produtoPromise, ou seja, ele irá esperar a promise ser resolvida e retornar o valor do produto,
    // e enquanto isso ele irá renderizar o fallback do Suspense, que no caso é a mensagem "Carregando produto..."


    if (!produto) return <div>Produto nao encontrado</div>

    return (

        <div className={styles.content}>
            <div className={styles.image}>
                <img src={produto.image} alt={produto.title} />
            </div>
            <div className={styles.info}>
                <span className={styles.categoria}>{produto.category}</span>
                <h1 className={styles.title}>{produto.title}</h1>
                <p className={styles.descricao}>{produto.description}</p>
                <p className={styles.preco}>{produto.price.toFixed(2)}</p>
                <button className={styles.btn}>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default ProdutoDetalhesConteudo