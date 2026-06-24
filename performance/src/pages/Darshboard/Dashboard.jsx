import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import ListTransaction from '../../Components/ListTransaction/ListTransaction';

// import Reports from './Reports';
const Reports = lazy(() => import('./Reports'));

// O lazy é usado para carregar o componente Reports de forma assíncrona, ou seja, 
// ele só será carregado quando for realmente necessário.

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
    const [transaction, setTransaction] = useState(MOCK_DATA);
    const [tab, setTab] = useState('transactions');

    // const transaction = MOCK_DATA;
    // O transaction é uma referência para o array MOCK_DATA, que é criado apenas uma vez quando o componente é montado.
    //  Como o array não muda, a referência permanece a mesma entre renderizações,
    //  evitando re-renderizações desnecessárias do componente ListTransaction.
    // junto ao memo, isso garante que o ListTransaction só será re-renderizado quando as props realmente mudarem.
    // caso contrário, ele será memorizado e não será re-renderizado, mesmo que o componente pai (Dashboard) seja re-renderizado.
    // Se o array fosse recriado a cada renderização, a referência mudaria e o ListTransaction seria 
    // re-renderizado mesmo que as props não mudassem. Com isso o memo não teria efeito, 
    // pois o ListTransaction seria re-renderizado a cada renderização do Dashboard.

    const handleDelete = useCallback((id) => {
        if (id === undefined) return;

        setTransaction(prev => prev.filter(t => t.id !== id));

    }, []);

    // O useCallback é usado para memorizar a função handleDelete, evitando que ela seja recriada a cada 
    // renderização do componente Dashboard.
    // Isso é útil para otimizar o desempenho, especialmente quando a função é passada como prop para componentes filhos,
    // como o ListTransaction. Se a função fosse recriada a cada renderização, o ListTransaction seria re-renderizado
    // mesmo que as props não mudassem, pois a referência da função mudaria. Com o useCallback, a referência da função
    // permanece a mesma entre renderizações, evitando re-renderizações desnecessárias do ListTransaction.

    // O useCallback é diferente do useMemo, que é usado para memorizar valores ou funções,
    // enquanto o useCallback é usado para memorizar funções. O useMemo retorna o valor memorizado,
    // enquanto o useCallback retorna a função memorizada.

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)
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

            <nav className={styles.nav}>
                <button className={`${styles.navButton} ${tab === 'transactions' ? styles.activeButton : ''}`}
                    onClick={() => { setTab('transactions') }} >Transactions</button>

                <button className={`${styles.navButton} ${tab === 'reports' ? styles.activeButton : ''}`}
                    onClick={() => { setTab('reports') }} >Reports</button>
            </nav>

            <section>
                <h2>Ultimas Transações</h2>

                {tab === 'transactions' && (
                    <ListTransaction items={transaction} onDelete={handleDelete} />
                )}

                {tab === 'reports' && (
                    <Suspense fallback={<p>Carregando Relatorio...</p>}>    
                    <Reports />
                    </Suspense>
                )}

            </section>

        </div>


    )
}