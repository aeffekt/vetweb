import dglogo from '../images/dglogo.png'
import logo2 from '../images/logo.png'
import '../css/Header.css'

function Header() {
    return (        
        <header className="header">            
            <a href="./home">
                <img decoding='async' className="logo-img" src={ logo2 } alt="Logo veterinaria"/>  
                <img decoding='async' className="name-img" src={ dglogo } alt="Diego Gonzalez"/>                  
            </a>
        </header>
    )
}

export default Header