import { createContext, useState } from "react"

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState({ nome: 'Manoel', email: 'manoel@gmail.com' });

    return (

        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    )
}

/*
Para facilitar, imagine que estamos montando uma estação de rádio:

1. O Canal (ThemeContext)
const ThemeContext = createContext() Este é o objeto do contexto em si. Ele não guarda os dados ainda; ele é apenas o "canal" ou o endereço onde as informações vão trafegar. Por isso, usamos o nome do que ele representa (Theme).

2. A Antena Transmissora (ThemeContext.Provider)
Este é um componente nativo que o próprio React nos dá assim que criamos o contexto. Ele tem uma função única para prover (entregar) o valor para quem estiver abaixo dele. É por isso que o retorno da função usa obrigatoriamente essa sintaxe: <ThemeContext.Provider value="{...}">.

3. A Caixa Organizadora (ThemeProvider)
export function ThemeProvider({ children }) Aqui está o "pulo do gato". Esta função é um Componente Customizado que criamos. É ela que deve ser importada e usada com o useContext() para que possamos ter acesso ao que foi externalizado através do value, ex: const { theme } = useContext(ThemeContext) em Layout.jsx
Usamos o sufixo Provider para indicar que este componente encapsula toda a lógica de um contexto específico e já entrega o "pacote completo" (estado + funções).

Resumindo:
ThemeContext: A definição do canal.
ThemeProvider: A sua função que gerencia o estado.
ThemeContext.Provider: A ferramenta do React que realmente faz a transmissão dos dados para os filhos (children).
Na prática: Quando você envolve o Layout com <ThemeProvider/>, você está dizendo: "Ei, React! Use essa lógica que eu criei para alimentar todo mundo que estiver dentro do Layout".
O padrão que usei é o mais aceito no mercado: o arquivo e o objeto principal levam o nome do contexto, e a função que gerencia tudo leva o sufixo Provider.
*/