import { Activity, useLayoutEffect, useState, useRef } from "react"

function MeuComponent() {

  const [count, setCount] = useState(0);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    console.log('MeuComponent entra na tela ');
    console.log(videoRef.current);
    videoRef?.current?.play();
    return () => {
      console.log('MeuComponent sai da tela ');
      console.log(videoRef.current);
      videoRef?.current?.pause();
    }
  }, [])

  return (
    <>
      <p>Count: {count} </p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <video width="300px" ref={videoRef} controls>

        <source src="https://b471b51d-3e69-4dbb-b2e6-bc5c13340f7b.mdnplay.dev/shared-assets/videos/flower.webm" type="video/mp4" />

      </video>

    </>
  )
}


function App() {

  const [show, setShow] = useState(true);

  return (

    <div>

      <button onClick={() => setShow(!show)}>{show ? 'Esconder' : 'Mostrar'}</button>
      {/* {show && <MeuComponent />} Renderização condicional */}
      {/* <div style={{ display: show ? "block" : "none" }}>
        <MeuComponent />
      </div> */}

      <Activity mode={show ? 'visible' : 'hidden'}>
        <MeuComponent />
      </Activity>
      {/* O Activity controla a visibilidade do componente filho com base no modo especificado */}

    </div>
  )
}

export default App
