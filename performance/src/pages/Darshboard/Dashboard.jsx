import { lazy, Suspense, useCallback, useEffect, useState, useTransition } from 'react'
import styles from './Dashboard.module.css'
import ListTransaction from '../../Components/ListTransaction/ListTransaction';
import Timer from './Timer';

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

    const [transaction, setTransaction] = useState(MOCK_DATA);
    const [tab, setTab] = useState('transactions');
    const [pendingTab, setPendingTab] = useState(null);

    const [isPending, startTransition] = useTransition();

    // O useTransition é usado para adiar a atualização do estado da aba (tab) quando o usuário clica em uma das abas.
    // Isso é útil para otimizar o desempenho, especialmente quando a atualização do estado da aba envolve renderizações pesadas,
    // como a renderização do componente Reports. Com o useTransition, a atualização do estado da aba é adiada até que o componente
    // Reports seja carregado, evitando que o usuário veja uma tela em branco enquanto o componente é carregado.

    // O useTransition retorna um array com dois elementos: isPending e startTransition.
    // isPending é um booleano que indica se a atualização do estado da aba está pendente.
    // startTransition é uma função que recebe uma função de atualização do estado da aba como argumento e adia 
    // a atualização do estado da aba até que o componente Reports seja carregado.


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

    const handleTabChanges = (nextTab) => {
        setPendingTab(nextTab); //Urgente

        startTransition(() => {
            setTab(nextTab); // Nao urgente, devido ao useTransition
        })
    }

    useEffect(() => {
        console.log('isPending, pendingTab');
        console.log(isPending, pendingTab);

        if (!isPending) {
            setPendingTab(null);
        }

    }, [isPending]);

    // O useCallback é usado para memorizar a função handleDelete, evitando que ela seja recriada a cada 
    // renderização do componente Dashboard.
    // Isso é útil para otimizar o desempenho, especialmente quando a função é passada como prop para componentes filhos,
    // como o ListTransaction. Se a função fosse recriada a cada renderização, o ListTransaction seria re-renderizado
    // mesmo que as props não mudassem, pois a referência da função mudaria. Com o useCallback, a referência da função
    // permanece a mesma entre renderizações, evitando re-renderizações desnecessárias do ListTransaction.

    // O useCallback é diferente do useMemo, que é usado para memorizar valores ou funções,
    // enquanto o useCallback é usado para memorizar funções. O useMemo retorna o valor memorizado,
    // enquanto o useCallback retorna a função memorizada.

    return (

        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Sistema Financeiro</h1>
                <div className={styles.timeCard}>
                    {/* <span className={styles.timerValue}>{time}</span> */}
                    <Timer />
                </div>
            </header>

            <nav className={styles.nav}>
                <button className={`${styles.navButton} ${tab === 'transactions' ? styles.activeButton : ''}`}
                    onClick={() => { handleTabChanges('transactions') }} >{isPending && pendingTab === 'transactions' ? 'Aguarde' : 'Transactions'}</button>

                <button className={`${styles.navButton} ${tab === 'reports' ? styles.activeButton : ''}`}
                    onClick={() => { handleTabChanges('reports') }} >{isPending && pendingTab === 'reports' ? 'Aguarde' : 'Reports'}</button>
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