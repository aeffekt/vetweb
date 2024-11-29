import dglogo from '../images/dglogo.png'
import '../css/Header.css'

function Header() {
    return (        
        <header className="header">            
            <a href="/Home">
                <img className="logo-img" src={dglogo} alt="Diego Gonzalez"/>  
            </a>
        </header>
    )
}

export default Header