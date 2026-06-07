import { Link } from "react-router-dom"
import { listaProjetos } from "./dados.js"

function Projetos() {

    return (
        <section>
            <h1>Meus projetos</h1>

            {/* <ul>
                 {listaProjetos.map(p => <li key={p.id}>• {p.nome}</li>)} 
            </ul> */}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {listaProjetos.map(p => <article key={p.id} style={{ border: '1px solid var(--border', padding: '10px' }} >
                    <h2> • {p.nome}</h2>
                    <p> • {p.desc}</p>

                    <Link style={{ marginTop: '16px', display: 'inline-block' }} to={`/projetos/${p.id}`}>Ver mais detalhes</Link>
                </article>)}
            </div>


        </section>
    )
}

export default Projetos