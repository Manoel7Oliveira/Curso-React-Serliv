import { useContext } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Profile from "../Profile/Profile";
import styles from "./Layout.module.css"
import { ThemeContext } from "../../Contexts/ThemeContext";


export default function Layout() {

    // const [theme, setTheme] = useState("Light");
    const { theme } = useContext(ThemeContext);

    return (

        // <div className={` ${styles.container} ${styles[theme]} `}>
        //     <Header theme={theme} setTheme={setTheme} />
        //     <Profile />
        //     <Hero theme={theme} />
        // </div>

        <div className={` ${styles.container} ${styles[theme]} `}>
            <Header />
            <Profile />
            <Hero />
        </div>

    )
}