import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape/Index.js";
import FavoritosProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    );
}
