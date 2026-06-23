import { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import ListTransaction from '../../Components/ListTransaction/ListTransaction';

const MOCK_DATA = Array.from({ length: 100 }, (_, i) => ({

    id: i,
    client: `Client ${i + 1}`,
    amount: Math.floor(Math.random() * 1000),
    date: new Date().toLocaleTimeString(),
    status: Math.random() > 0.5 ? "Concluido" : "Pendente"

}));

console.log('MOCK_DATA CRIADO ......');

export default function Dashboard() {
    console.log('Dashboard renderizado');

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const transaction = MOCK_DATA;
    // O transaction é uma referência para o array MOCK_DATA, que é criado apenas uma vez quando o componente é montado.
    //  Como o array não muda, a referência permanece a mesma entre renderizações,
    //  evitando re-renderizações desnecessárias do componente ListTransaction.
    // junto ao memo, isso garante que o ListTransaction só será re-renderizado quando as props realmente mudarem.
    


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 5000)
        return () => clearInterval(timer);
    }, []);

    return (

        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Sistema Financeiro</h1>
                <div className={styles.timeCard}>
                    <span className={styles.timerValue}>{time}</span>
                </div>
            </header>

            <section>
                <h2>Ultimas Transações</h2>

                <ListTransaction items={transaction} />

            </section>

        </div>


    )
}