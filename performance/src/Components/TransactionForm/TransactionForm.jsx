import { useActionState, useEffect, useRef } from 'react'
import { createTransactionAction } from '../../actions/TransactionFormAction'

export default function TransactionForm({ onAddtransaction }) {

    const [state, formAction, isPending] = useActionState(createTransactionAction, {
        success: false,
        error: null,
        newData: null
    });

    //const formRef = useRef(null);

    useEffect(() => {
        console.log('useEffect');
        console.log(state);

        if (state.success && state.newData) {
            onAddtransaction(state.newData);
        }

    }, [state]);

    return (
        <div style={{ marginBottom: '2rem' }}>

            <form action={formAction} style={{ display: 'flex', gap: '.5rem', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', marginTop: '2rem', alignItems: 'center' }}>
                    <p style={{ marginTop: '1.5rem' }}>Adicionar Transacão</p>
                    <div>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Nome do Cliente:</label>
                        <input
                            type="text"
                            name="client"
                            disabled={isPending}
                            style={{ padding: '6px' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Valor (R$):</label>
                        <input
                            type="number"
                            name="amount"
                            disabled={isPending}
                            style={{ padding: '6px' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '4px' }}>Status:</label>
                        <select name="status" style={{ padding: '6px' }} disabled={isPending}>
                            <option value="Concluído">Concluído</option>
                            <option value="Pendente">Pendente</option>
                        </select>
                    </div>
                </div>

                {/* Se tiver erro será visivel aqui */}
                {

                (state.error && !isPending) && (<div style={{ color: '#ef4444', fontSize: '0.85rem' }}>
                    ❌ Erro: {state.error}
                </div>)
                
                }


                <button
                    type="submit"
                    disabled={isPending}
                    style={{
                        padding: '10px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: isPending ? 'not-allowed' : 'pointer'
                    }}>

                    {isPending ? 'Aguarde...' : 'Adicionar Transação'}
                </button>
            </form>
        </div>
    )
}