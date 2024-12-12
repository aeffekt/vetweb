import '../css/Footer.css'
import Logoico from '../images/logoicosmall.png'
import Logoinsta from '/images/instagramlogo.png'
import AAmarca from './AAmarca';


function Footer() {
  return (
    <footer className='footer-container'>            
        <footer>        
            <img decoding='async' src='/images/logo_dac.png' alt="" />
            
            <p>Médico Veterinario: <b>Diego Gonzalez <i>MP: 4566</i></b></p>            
            <p>Visítanos en instagram: 
              <a title="Instagram" href="https://www.instagram.com/dermatologia.veterinaria.cba/" target="_blank">
                <img decoding='async' src={ Logoinsta } alt="instagram logo" id="logoinsta"/>
              </a>
            </p>            
            <small><i>Córdoba - Argentina</i></small>
            <br />
            <hr />
            <AAmarca />            
        </footer>      
    </footer>
  )
}

export default Footer
