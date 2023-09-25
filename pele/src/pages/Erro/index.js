import './Erro.css'
import BolaMurcha from '../../images/bola-murcha.png'

export default function Erro() {
    return (
        <div className='erro'>
            <h1>404</h1>
            <p>Página não encontrada!</p>
            <img src={BolaMurcha} alt='Erro'/>
        </div>
    )
}