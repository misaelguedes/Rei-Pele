import {Link} from 'react-router-dom'

import './Menu.css'

export default function Menu() {
    return (
        <menu>
            <Link to='/'>Home</Link>
            <Link to='/historia'>História</Link>
            <Link to='/titulos'>Títulos</Link>
            <Link to='/estatisticas'>Estatísticas</Link>
            <Link to='/videos'>Vídeos</Link>
        </menu>
    )
}