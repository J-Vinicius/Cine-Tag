import Rodape from 'components/Rodape'
import Cabecalho from 'components/Cabecalho'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import videos from 'json/bd.json'

export const Inicio = () => {
  return (
    <>
        <Cabecalho />
        <Banner imagem="home"/>
        <Titulo>Um lugar para guardar suas séries e filmes!</Titulo>
        <section className="max-w-full md:max-w-[50%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          {videos.map((video) => {
            return <Card {...video} key={video.id} />
          })}
        </section>
        <Rodape>Desenvolvido por Alura</Rodape>
    </>
  )
}
