import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import videos from 'json/bd.json'
import Container from 'components/Container'

export const Inicio = () => {
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
