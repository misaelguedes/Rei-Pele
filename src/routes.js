import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import História from "./pages/História"
import Títulos from "./pages/Títulos"
import Estatísticas from "./pages/Estatísticas"
import Vídeos from "./pages/Vídeos"
import Erro from "./pages/Erro"
import Header from './components/Header'
import Menu from "./components/Menu"
import Footer from "./components/Footer"

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
        <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/historia" element={<História/>}/>
                <Route path="/titulos" element={<Títulos/>}/>
                <Route path="/estatisticas" element={<Estatísticas/>}/>
                <Route path="/videos" element={<Vídeos/>}/>

                <Route path="*" element={<Erro/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}