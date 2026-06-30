export const createTransactionAction = async (previousState, formData) => {

    const client = formData.get('client').trim();
    const amount = formData.get('amount');
    const status = formData.get('status');

    //Validaçoes simples

    if (!client) {
        return {
            success: false, error: 'O cliente é obrigatorio'
        }
    }

    if (client.length < 3) {
        return {
            success: false, error: 'O cliente precisa ter no minimo três caracteres'
        }
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    if (!amount) {
        return {
            success: false, error: 'A quantidade é obrigatoria'
        }
    }

    if (parseFloat(amount) <= 0) {
        return {
            success: false, error: 'A quantidade precisa ser maior que zero'
        }
    }

    return {

        success: true,
        error: null,
        newData: {
            id: Date.now(),
            client,
            amount: parseFloat(amount),
            date: new Date().toLocaleDateString(),
            status
        }
    }

}

