// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import React from "react"
{/*To componente deve começar com letra maiuscula*/ }
function App() {

  const idade = 30
  const pessoas = ['Manoel', 'Rafaela', 'Henrique']

  const contatos = [
    { nome: 'Manoel', sobrenome: 'Oliveira', email: 'manoel@hotmail.com' },
    { nome: 'Rafaela', sobrenome: 'Menegussi', email: 'Rafaela@gmail.com' },
    { nome: 'Henrique', sobrenome: 'Cupertino', email: 'henrique@yahoo.com' }
  ]

  return (

    <>

      <h1> o fragment é uma forma de escrever codigos js em html, que no caso vira um arquivo jsx</h1>
      <h1>Eu tenho {idade} anos</h1>
      {/*<p>{pessoas.join(', ')}</p>*/}
      {/*Pode ser dessa forma acima ou usando o React.Fragment*/}
      {/*Essa funçao é um componente, que retorna para o app que esta sendo exportado para main.js*/}
      {/*SEMPRE LEMBRAR: PARA RETORNAR UM JSX É NECESSARIO RETORNAR UM ELEMENTO POR VEZ. POR ISSO SEMPRE USAR O ALIAS --> <></>*/}

      <div>

        {pessoas.map(pessoa => (<p key={pessoa}>{pessoa}</p>))}

        {contatos
          .filter(contato => contato.nome === 'Manoel')
          .map(contato => (
            <React.Fragment key={contato}>
              {/*<p>{contato.nome} {contato.sobrenome} - {contato.email}</p>*/}
            </React.Fragment>
          ))
        }

        <>
          <h1>Lista de Contatos</h1>

          {contatos.map(contato => (
            <React.Fragment key={contato.nome}>

              <h2>{contato.nome} {contato.sobrenome}</h2>
              <p>{contato.email}</p>

            </React.Fragment>
          )
          )}

        </>
      </div>
    </>
  )
}

export default App
