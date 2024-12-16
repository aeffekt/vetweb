import { Link } from 'react-router-dom';
import Layout from './Layout';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import "../css/Home.css";
import Perro from '../images/consulta2.jpg'
import Maps from '../images/dire_maps.jpg'
import Turno from '../images/turno.jpg'


function Home() {
    return (
        <Layout>             
            <section className="homelayout">
                <div className="grow1">
                    <Link className='no-decoration' to="/servicios">
                        <Card
                            title="Servicios"
                            description="Ver todos los servicios que ofrecemos"
                            src={Perro}
                        />
                    </Link>                    
                </div>                
                <div className="grow1">
                    <a 
                        className='no-decoration'
                        href="https://www.google.com/maps/place/Oncativo+320,+X5000+C%C3%B3rdoba/@-31.4104924,-64.1793713,17z/data=!3m1!4b1!4m6!3m5!1s0x94329875fa24017d:0xfbf59f9c120a3efd!8m2!3d-31.410497!4d-64.1767964!16s%2Fg%2F11fk4g2ws2?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
                        target='_blank'>
                            <Card
                                title="Ubicación"
                                description="Donde nos encuentra"
                                src={Maps}
                            />
                    </a>
                    
                </div>
                <div className="grow1">
                    <a 
                        className='no-decoration'
                        href="https://api.whatsapp.com/send/?phone=+54%209%203512%2017-2630&text=Hola!%20me%20gustar%C3%ADa%20reservar%20un%20turno%20para%20mi%20mascota,%20saludos"
                        target='_blank'>
                        <Card
                            title="Turno"
                            description="Reserva tu turno vía Whatsapp"
                            src={Turno}
                        />
                    </a>
                </div>
            </section>            
            <Carousel></Carousel>
        </Layout>        
    )
}

export default Home