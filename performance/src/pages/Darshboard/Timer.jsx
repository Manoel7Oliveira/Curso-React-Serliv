import { useEffect, useState } from 'react';
import styles from './Dashboard.module.css'


export default function Timer() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)

        return () => clearInterval(timer);
    }, []);

    return (

        <span className={styles.timerValue}>{time}</span>
    )
}