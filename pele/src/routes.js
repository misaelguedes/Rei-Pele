import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
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
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}