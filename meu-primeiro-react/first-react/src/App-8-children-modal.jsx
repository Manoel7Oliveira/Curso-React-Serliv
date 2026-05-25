import React, { useEffect, useRef, useState } from "react";
import Button from "./Componentes/Button/Button";
import Card from "./Componentes/Card/Card";

function App() {

    const [isPlaying, setIsPlaying] = useState(false)
    const [time, setViewTime] = useState(0)
    const videoRef = useRef(null)

    function clickButton() {
        setIsPlaying(!isPlaying);

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }

    useEffect(() => {
        console.dir(videoRef.current) // aqui o videoRef.current é o elemento de video do DOM, ou seja, a tag video. 
        // O dir é para mostrar a estrutura do elemento, e o currentTime é uma propriedade do elemento de video, 
        // que mostra o tempo atual do video. O console.log vai mostrar o tempo atual do video, que é 0 no inicio, 
        // pois o video ainda não foi reproduzido.
        console.log(videoRef.current.currentTime)
    }, [])

    useEffect(() => {
        console.log('Componente modificado')
    })


    // setInterval(() => {
    // console.log(videoRef.current.currentTime)
    // }, 1000) // aqui o setInterval vai mostrar o tempo atual do video a cada segundo, ou seja, a cada 1000 milissegundos.
    // Porem o setInterval vai continuar mostrando o tempo atual do video mesmo quando o video estiver pausado, 
    // pois o setInterval é uma função que roda a cada intervalo de tempo, independente do estado do video.
    // E sempre que o video for reproduzido ou pausado, o tempo atual do video vai ser atualizado, 
    // mesmo que o setInterval continue rodando. Criando assim varios setInterval,
    //  o que não é recomendado. O ideal seria usar o useEffect para criar o setInterval, 
    // e limpar o setInterval quando o componente for desmontado, usando o return do useEffect.

    const intervalRef = useRef(null)

    function playVideo() {
        setIsPlaying(true)
        console.log('playVideo')
        intervalRef.current = setInterval(() => { // Dessa forma, o setInterval só vai rodar quando o componente estiver montado, 
            // e vai ser limpo quando o componente for desmontado. Ou seja, nao vai criar varios setInterval, 
            // e vai parar de mostrar o tempo atual do video quando o componente for desmontado.
            // O intervalRef vai armazenar o ultimo setInterval criado, ou seja, o setInterval que esta rodando atualmente. 
            // E o clearInterval vai limpar o setInterval que esta armazenado no intervalRef, ou seja, 
            // o setInterval que esta rodando atualmente.
            console.log(videoRef.current.currentTime)
            setViewTime(videoRef.current.currentTime)
        }, 100)


    }

    function pauseVideo() {
        setIsPlaying(false)
        console.log('pauseVideo')
        console.log(videoRef.current.currentTime)
        clearInterval(intervalRef.current) // aqui o clearInterval vai limpar o setInterval, ou seja, 
        // vai parar de mostrar o tempo atual do video a cada segundo, quando o componente for desmontado.
        setViewTime(videoRef.current.currentTime)  
    }


    return (

        <>
            <button onClick={clickButton}>{isPlaying ? 'Pause' : 'Play'}</button>
            <video onPlay={() => playVideo()} onPause={() => pauseVideo()} width="300px" ref={videoRef} controls>

                <source src="https://b471b51d-3e69-4dbb-b2e6-bc5c13340f7b.mdnplay.dev/shared-assets/videos/flower.webm" type="video/mp4" />

            </video>

            <p>Tempo decorrido: {time.toFixed(2)}</p>


        </>
    )
}

export default App 