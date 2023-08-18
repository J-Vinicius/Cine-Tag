import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import Container from 'components/Container'
import { useEffect, useState } from 'react'

export const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/J-Vinicius/cinetag-api/videos')
      .then(resp => resp.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])
  return (
    <div className="flex-inline w-full">
      <Banner imagem="home"/>
      <Titulo>Um lugar para guardar suas séries e filmes!</Titulo>
      <Container>
        {videos.map((video) => {
            return <Card {...video} key={video.id} />
          })}
      </Container>
    </div>
  )
}
