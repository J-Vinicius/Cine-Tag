import Banner from "components/Banner";
import Container from "components/Container";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";
import { useEffect, useState } from "react";

export default function Player() {

    const [video, setVideo] = useState();

    const parametros = useParams();
   
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/J-Vinicius/cinetag-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setVideo(...dados)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(!video) {
        return <NaoEncontrada />
    }
    return ( 
        <>
            <Banner imagem="player" />
            <Titulo>{video.titulo}</Titulo>
            <section className="w-full h-[391px]">
                <div className="max-w-md h-[64%] mx-auto">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={video.link} 
                        title={video.titulo} frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                    ></iframe>
                </div>
            </section>
        </>
    );
}
