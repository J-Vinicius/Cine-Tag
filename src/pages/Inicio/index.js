import Rodape from '../../components/Rodape'
import Cabecalho from '../../components/Cabecalho'
import Banner from '../../components/Banner'
import Titulo from 'components/Titulo'

export const Inicio = () => {
  return (
    <>
        <Cabecalho />
        <Banner imagem="home"/>
        <Titulo>Um lugar para guardar suas séries e filmes!</Titulo>
        <Rodape>Desenvolvido por Alura</Rodape>
    </>
  )
}
