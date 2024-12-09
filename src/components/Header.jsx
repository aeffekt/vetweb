import { Link } from 'react-router-dom';
import dglogo from '../images/dglogo.png'
import logovet from '../images/logovet.png'
import '../css/Header.css'

function Header() {
    return (        
        <header className="header">            
            <Link to="/home">
                <img decoding='async' className="logo-img" src={ logovet } alt="Logo veterinaria"/>  
                <img decoding='async' className="name-img" src={ dglogo } alt="Diego Gonzalez"/>                  
            </Link>
        </header>
    )
}

export default Header