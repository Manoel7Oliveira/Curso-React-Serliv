import { useContext } from "react"
import styles from "./Hero.module.css"
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function Hero() {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={styles.hero}>
            <h2>Bem-vindo - {theme}</h2>
            <p>Este é um exemplo de useContext + Css Modules</p>
        </section>
    )
}