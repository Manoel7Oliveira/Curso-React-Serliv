import { useState } from 'react'
//import styles from './App-2.module.css'
import InputWithPills from './components/InputWithPills/InputWithPills'

const paraCelsius = (f) => (f - 32) / 1.8
const paraFahrenheit = (c) => (c * 1.8) + 32

function App() {


  return (
    <>
    
    <h1>Input com tags</h1>
      <InputWithPills/>
        
    </>
  )
}

export default App
