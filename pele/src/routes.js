import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Títulos from "./pages/Títulos"
import Estatísticas from "./pages/Estatísticas"
import Vídeos from "./pages/Vídeos"
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
                <Route path="/titulos" element={<Títulos/>}/>
                <Route path="/estatisticas" element={<Estatísticas/>}/>
                <Route path="/videos" element={<Vídeos/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}