import Cabecalho from "components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import { Inicio } from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "components/Rodape";
import FavoritosProvider from "contexts/Favoritos";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Cabecalho />
                <FavoritosProvider>    
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritosProvider>
            <Rodape>Desenvolvido por Alura</Rodape>
        </BrowserRouter>
    )
}