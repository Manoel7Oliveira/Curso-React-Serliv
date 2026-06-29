export const createTransactionAction = async (previousState, formData) => {

    const client = formData.get('client').trim();
    const amount = formData.get('amount');
    const status = formData.get('status');

    //Validaçoes simples

    if (!client) {
        return {
            sucess: false, error: 'O cliente é obrigatorio'
        }
    }

    if (client.length < 3) {
        return {
            sucess: false, error: 'O cliente precisa ter no minimo tres caracteres'
        }
    }

    if (!amount) {
        return {
            sucess: false, error: 'A quantidade é obrigatoria'
        }
    }

    if (parseFloat(amount) <= 0) {
        return {
            sucess: false, error: 'A quantidade precisar ser maior que zero'
        }
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    return {

        sucess: true,
        error: null,
        newData: {
            id: Date.now(),
            client,
            amount: parseFloat(amount),
            date: dataAleatoria(),
            status
        }
    }

}

