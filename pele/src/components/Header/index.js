import './Header.css'
import capa from '../../images/pele-eterno.jpg'

export default function Header() {
    return (
        <header>
            <img src={capa} alt='Rei Pelé'/>
        </header>
    )
}