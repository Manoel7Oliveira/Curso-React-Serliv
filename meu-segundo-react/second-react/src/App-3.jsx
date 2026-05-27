import { useState } from 'react'
import styles from './App-2.module.css'
import { InputLabel } from './components/InputLabel/InputLabel'

const paraCelsius = (f) => (f - 32) / 1.8
const paraFahrenheit = (c) => (c * 1.8) + 32

function App() {

  const [temperature, setTemperature] = useState('0');
  const [scale, setScale] = useState('C');

  // Converter para Celsius
  const celsius = scale === 'F' ? paraCelsius(parseFloat(temperature)) : (parseFloat(temperature));
  // Converter para fahrenheit
  const fahrenheit = scale === 'C' ? paraFahrenheit(parseFloat(temperature)) : (parseFloat(temperature));

  return (
    <>
      <div className={styles.container}>
        <h2>Conversor de temperatura</h2>

        <InputLabel disclaimer="ºC" label="Celsius" value={scale === 'C' ? temperature : celsius.toFixed(1)}
          type='number' onValueChange={(grau) => {
            setScale('C');
            setTemperature(grau);
          }} />

        <InputLabel disclaimer="ºF" label="fahrenheit" value={scale === 'F' ? temperature : celsius.toFixed(1)}
          type='number' onValueChange={(grau) => {
            setScale('F');
            setTemperature(grau);
          }} />
      </div>

      <p>Temperatura atual: <b>{celsius.toFixed(1)}ºC</b> é igual a <b>{fahrenheit.toFixed(1)}</b>ºF</p>
    </>
  )
}

export default App
