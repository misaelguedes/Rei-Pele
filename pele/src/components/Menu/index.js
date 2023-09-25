import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './Menu.css'

export default function Menu() {

    const [itensVisible, setItensVisible] = useState(false)

    useEffect(() => {
        function mudouTamanho() {
            setItensVisible(window.innerWidth >= 646)
        }

        window.addEventListener('resize', mudouTamanho);

        mudouTamanho();

        return () => {
            window.removeEventListener('resize', mudouTamanho);
          };
    }, [])
    
    function clickMenu() {
        setItensVisible(!itensVisible)
    }

    function hideMenu() {
        if (window.innerWidth <= 646) {
            setItensVisible(false)
        }
    }

    return (
        <div>
            <span id="burguer" class="material-symbols-outlined" onClick={clickMenu}>menu</span>
            <menu id='itens' style={{ display: itensVisible ? 'block' : 'none' }}>
                <Link to='/' onClick={hideMenu}>Home</Link>
                <Link to='/historia' onClick={hideMenu}>História</Link>
                <Link to='/titulos' onClick={hideMenu}>Títulos</Link>
                <Link to='/estatisticas' onClick={hideMenu}>Estatísticas</Link>
                <Link to='/videos' onClick={hideMenu}>Vídeos</Link>
            </menu>
        </div>
        
    )
}