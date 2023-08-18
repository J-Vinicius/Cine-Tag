import Banner from "components/Banner";
import Container from "components/Container";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from 'json/bd.json'
import NaoEncontrada from "pages/NaoEncontrada";

export default function Player() {
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

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
