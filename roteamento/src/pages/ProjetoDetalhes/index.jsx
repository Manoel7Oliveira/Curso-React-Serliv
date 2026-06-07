import { Link, useParams } from "react-router-dom";
import { listaProjetos } from "../projetos/dados";


function ProjetoDetalhes() {
    const { id } = useParams();
    console.log(typeof id)

    const projeto = listaProjetos.find(p => p.id === id);
    console.log(listaProjetos)
    console.log(projeto)

    if (!projeto) {
        return <h2>Projeto nao encontrado!</h2>
    }

    return (
        <section>
            <h1>{projeto.nome}</h1>
            <img src={projeto.imagem} width='100%' height='600' style={{ width: '100%', height: 'auto', marginBottom: '20px', borderRadius: '8px' }}></img>
            <p><b>Descrição: </b>{projeto.desc}</p>
            <p><b>Tecnologias: </b>{projeto.tecnologias}</p>

            <Link style={{ marginTop: '20px', display: 'block' }} to="/projetos">Voltar para lista de projetos</Link>
        </section>
    )

}

export default ProjetoDetalhes
