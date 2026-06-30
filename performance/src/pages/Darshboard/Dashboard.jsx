import { lazy, Suspense, useCallback, useDeferredValue, useEffect, useState, useTransition } from 'react'
import styles from './Dashboard.module.css'
import ListTransaction from '../../Components/ListTransaction/ListTransaction';
import Timer from './Timer';
import TransactionForm from '../../Components/TransactionForm/TransactionForm';

// import Reports from './Reports';
const Reports = lazy(() => import('./Reports'));

// O lazy é usado para carregar o componente Reports de forma assíncrona, ou seja, 
// ele só será carregado quando for realmente necessário.


// function dataAleatoria() {
//     const inicio = new Date("2020-01-01").getTime();
//     const fim = new Date("2026-06-30").getTime();

//     const data = new Date(
//         inicio + Math.random() * (fim - inicio)
//     )

//     return data.toLocaleDateString();
// }

const MOCK_DATA = Array.from({ length: 100 }, (_, i) => ({

    id: i,
    client: `Cliente ${i + 1}`,
    amount: Math.floor(Math.random() * 1000),
    date: new Date().toLocaleTimeString(),
    status: Math.random() > 0.5 ? "Concluido" : "Pendente"

}));

console.log('MOCK_DATA CRIADO ......');

export default function Dashboard() {

    console.log('Dashboard renderizado');

    const [transaction, setTransaction] = useState(MOCK_DATA);
    const [tab, setTab] = useState('transactions');
    const [isPendingTab, setIsPendingTab] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    //const [filteredTransaction, setFilteredTransaction] = useState(MOCK_DATA);

    const [isPending, startTransition] = useTransition();
    const deferredSearchTerm = useDeferredValue(searchTerm);

    // const [isPendingSearch, startSearchTransition] = useTransition();
    // Deixamos de ultilizar o useTransition, pra usar o useDeferredValue

    const filteredTransaction = transaction.filter(t => t.client.toLowerCase().includes(deferredSearchTerm.toLowerCase()));
    const isPendingSearch = deferredSearchTerm !== searchTerm;



    const handleDelete = useCallback((id) => {
        if (id === undefined) return;

        setTransaction(prev => prev.filter(t => t.id !== id));

    }, []);

    // Deixamos de ultilizar a função handleSearch, pra usar o useDeferredValue

    // const handleSearch = (value) => {
    //     setSearchTerm(value); // Urgente. Fica fora do transition porque o input precisa responder imediatamente, sem atraso!

    //     startSearchTransition(() => {
    // Nao urgente!
    //         const filtered = transaction.filter(t => t.client.toLowerCase().includes(value.toLowerCase()));
    //         setFilteredTransaction(filtered);
    //     });
    // }

    const handleTabChanges = (nextTab) => {
        setIsPendingTab(nextTab); //Urgente

        startTransition(() => {
            setTab(nextTab); // Nao urgente, devido ao useTransition
        })
    }

    useEffect(() => {
        console.log('isPending, isPendingTab');
        console.log(isPending, isPendingTab);

        if (!isPending) {
            setIsPendingTab(null);
        }

    }, [isPending]);

    const handleAddTransaction = (newData) => {
        console.log('handleAddTransaction');
        console.log(newData);
        setTransaction(prev => [newData, ...prev]);
    }

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
                    onClick={() => { handleTabChanges('transactions') }} >{isPending && isPendingTab === 'transactions' ? 'Aguarde' : 'Transactions'}</button>

                <button className={`${styles.navButton} ${tab === 'reports' ? styles.activeButton : ''}`}
                    onClick={() => { handleTabChanges('reports') }} >{isPending && isPendingTab === 'reports' ? 'Aguarde' : 'Reports'}</button>
            </nav>

            <section>
                <h2>Ultimas Transações</h2>

                {tab === 'transactions' && (
                    <>
                        <input type="text" placeholder='Buscar clientes' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ padding: '0.5rem' }} />
                        <TransactionForm onAddtransaction={handleAddTransaction} />
                        <div style={{ opacity: isPendingSearch ? .5 : 1, transition: 'opacity .3s' }}>
                            <ListTransaction items={filteredTransaction} onDelete={handleDelete} />
                        </div>

                    </>

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

// O useTransition é usado para adiar a atualização do estado da aba (tab) quando o usuário clica em uma das abas.
// Isso é útil para otimizar o desempenho, especialmente quando a atualização do estado da aba envolve renderizações pesadas,
// como a renderização do componente Reports. Com o useTransition, a atualização do estado da aba é adiada até que o componente
// Reports seja carregado, evitando que o usuário veja uma tela em branco enquanto o componente é carregado.

// O useTransition retorna um array com dois elementos: isPending e startTransition.
// isPending é um booleano que indica se a atualização do estado da aba está pendente.
// startTransition é uma função que recebe uma função de atualização do estado da aba como argumento e adia
// a atualização do estado da aba até que o componente Reports seja carregado.

// O useDeferredValue é usado para adiar a atualização do estado da busca (searchTerm) quando o usuário digita no input de busca.
// Isso é útil para otimizar o desempenho, especialmente quando a atualização do estado da busca envolve renderizações pesadas,
// como a renderização do componente ListTransaction. Com o useDeferredValue, a atualização do estado da busca é adiada até que
// o componente
// ListTransaction seja renderizado, evitando que o usuário veja uma tela em branco enquanto o componente é renderizado.

// O useDeferredValue retorna um valor que é atualizado de forma assíncrona, ou seja, ele só será atualizado quando o componente
// ListTransaction for renderizado. Isso significa que o valor retornado pelo useDeferredValue pode estar desatualizado
// em relação ao valor
// atual do estado da busca (searchTerm). No entanto, isso não é um problema, pois o valor retornado pelo useDeferredValue
// é usado apenas
// para filtrar os dados da lista de transações (filteredTransaction), e não para atualizar o estado da busca (search

// const transaction = MOCK_DATA;
// O transaction é uma referência para o array MOCK_DATA, que é criado apenas uma vez quando o componente é montado.
//  Como o array não muda, a referência permanece a mesma entre renderizações,
//  evitando re-renderizações desnecessárias do componente ListTransaction.
// junto ao memo, isso garante que o ListTransaction só será re-renderizado quando as props realmente mudarem.
// caso contrário, ele será memorizado e não será re-renderizado, mesmo que o componente pai (Dashboard) seja re-renderizado.
// Se o array fosse recriado a cada renderização, a referência mudaria e o ListTransaction seria
// re-renderizado mesmo que as props não mudassem. Com isso o memo não teria efeito,
// pois o ListTransaction seria re-renderizado a cada renderização do Dashboard.

// O useCallback é usado para memorizar a função handleDelete, evitando que ela seja recriada a cada
// renderização do componente Dashboard.
// Isso é útil para otimizar o desempenho, especialmente quando a função é passada como prop para componentes filhos,
// como o ListTransaction. Se a função fosse recriada a cada renderização, o ListTransaction seria re-renderizado
// mesmo que as props não mudassem, pois a referência da função mudaria. Com o useCallback, a referência da função
// permanece a mesma entre renderizações, evitando re-renderizações desnecessárias do ListTransaction.

// O useCallback é diferente do useMemo, que é usado para memorizar valores ou funções,
// enquanto o useCallback é usado para memorizar funções. O useMemo retorna o valor memorizado,
// enquanto o useCallback retorna a função memorizada.
