import { useContext } from "react";
import Button from "../Button/Button"
import styles from "./Header.module.css"
import { ThemeContext } from "../../Contexts/ThemeContext";
import { UserContext } from "../../Contexts/UserContext";

export default function Header() {

    function toggleTheme() {
        const newtheme = theme === 'Light' ? 'Dark' : 'Light'
        setTheme(newtheme);
    }

    function login() {
        if (user) {
            setUser(null);
        } else {
            setUser({ nome: 'Manoel', email: 'manoel@gmail.com' });
        }

    }
    const { user, setUser } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header className={styles.header}>
            <h1>Meu App - {theme} </h1>
            <Button onClick={toggleTheme}>Mudar tema</Button>
            <Button onClick={login}> {user ? "Logout" : "Login"}</Button>
        </header>
    )
}