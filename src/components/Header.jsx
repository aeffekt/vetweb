import { Link } from 'react-router-dom';
import '../css/Header.css'

function Header() {
    return (        
        <header className="header">            
            <Link to="/home">                
                <img decoding='async' className="name-img" src='/images/logo_dac.png' alt="Logo DAC"/>
            </Link>
        </header>
    )
}

export default Header