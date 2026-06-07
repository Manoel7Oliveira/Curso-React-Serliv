import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Sobre from './pages/Sobre'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Projetos from './pages/Projetos'
import ProjetoDetalhes from "./pages/ProjetoDetalhes/index.jsx"
import './App.css'



// O browserRouter é o componente que envolve toda a aplicação e permite o uso do roteamento.
// Ele deve ser colocado no nível mais alto da hierarquia de componentes, geralmente em torno do componente App.

// O Routes é o componente que define as rotas da aplicação. 
// Ele deve ser colocado dentro do BrowserRouter e envolve os componentes Route.

// O Route é o componente que define uma rota específica. Ele tem dois props principais: path e element.
// O path é a URL que corresponde à rota, e o element é o componente que será renderizado quando a rota for acessada.



function App() {


  return (
    <BrowserRouter>

      <Header />

      <main>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/projetos/:id' element={<ProjetoDetalhes />} />
          <Route path='/contato' element={<Contato />} />

          <Route path='*' element={<p>Pagina nao encontrada</p>} />
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App
