import Banner from "components/Banner";
import Card from "components/Card";
import Container from "components/Container";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contexts/Favoritos";

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return ( 
        <div className="flex-inline w-full">
            <Banner imagem="favoritos"/>
            <Titulo>Meus filmes favoritos</Titulo>
            <Container>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </Container>
        </div>
    );
}