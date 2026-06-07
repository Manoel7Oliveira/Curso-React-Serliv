import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Meu site</div>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/sobre">Sobre</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/projetos">Projetos</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.active : ''} to="/contato">Contato</NavLink></li>

                </ul>
            </nav>
        </header>
    )
}

// O NavLink é um componente do React Router que é usado para criar links de navegação. 
// Ele é semelhante ao Link, mas tem a capacidade de aplicar uma classe CSS ativa quando a rota correspondente está ativa.
// Isso é útil para destacar o link da página atual na navegação.

// No exemplo acima, o NavLink recebe uma função para a prop className que verifica se a rota está ativa. Se estiver ativa,
//  ele aplica a classe styles.active, caso contrário, não aplica nenhuma classe. 
// Isso permite que o link da página atual seja destacado na navegação.

// O to prop do NavLink é usado para especificar a URL para a qual o link deve navegar quando clicado.  

export default Header