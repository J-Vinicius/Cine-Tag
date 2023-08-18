import Cabecalho from "components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import { Inicio } from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Cabecalho />
                <FavoritosProvider>    
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id/:titulo" element={<Player />}></Route>
                        <Route path="*" element={<NaoEncontrada />}></Route>
                    </Routes>
                </FavoritosProvider>
            <Rodape>Desenvolvido por Alura</Rodape>
        </BrowserRouter>
    )
}