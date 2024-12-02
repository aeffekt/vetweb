import '../css/Footer.css'
import Logoico from '../images/logoicosmall.png'
import AAmarca from './AAmarca';


function Footer() {
  return (
    <footer className='footer-container'>            
        <footer>        
            <img decoding='async' src={ Logoico } alt="" />
            <h3>Veterinaria Dermatológica
              <p><b>Lic. Diego Gonzalez <i>MP: 4566</i></b></p>
            </h3>
            <hr />
            <AAmarca />            
        </footer>      
    </footer>
  )
}

export default Footer
