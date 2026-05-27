import { useState } from 'react'
import styles from './App-2.module.css'

function App() {

  const [valor, setValor] = useState('0');
  const [unidade, setUnidade] = useState('C');
  
  // Converter para Celsius
  const celsius = unidade === 'F' ? (parseFloat(valor) - 32) / 1.8 : (parseFloat(valor));
  // Converter para fahrenheit
  const fahrenheit = unidade === 'C' ? (parseFloat(valor) * 1.8) + 32 : (parseFloat(valor));

  return (
    <>
      <div className={styles.container}>
        <h2>Conversor de temperatura</h2>

        <div className={styles.inputGroup}>
          <label htmlFor="celsius">Celsius:</label>
          <input type="number" id="celsius" value={unidade === 'C' ? valor : celsius.toFixed(1)} onChange={(e) => {
            setUnidade('C');
            setValor(e.target.value);
          }} />
        </div>
        <span>ºC</span>

        <div className={styles.inputGroup}>
          <label htmlFor="fahrenheit">fahrenheit:</label>
          <input type="number" id="fahrenheit" value={unidade === 'F' ? valor : fahrenheit.toFixed(1)} onChange={(e) => {
            setUnidade('F');
            setValor(e.target.value);
          }} />
        </div>
        <span>ºF</span>
      </div>

      <p>Temperatura atual: <b>{celsius.toFixed(1)}ºC</b> é igual a <b>{fahrenheit.toFixed(1)}</b>ºF</p>
    </>
  )
}

export default App
