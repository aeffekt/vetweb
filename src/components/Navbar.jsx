import { Link } from 'react-router-dom';
import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar-container'>
      <ul className='ul-navbar'>
        <li><Link to="/home" className='active'>Home</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        <li><Link to="/forma-de-trabajo">Forma de trabajo</Link></li>        
        <li><Link to="/preguntas">Preguntas Frecuentes</Link></li>                                 
      </ul>
    </nav>      
  )
}

export default Navbar
