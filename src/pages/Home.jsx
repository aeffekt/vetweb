import Layout from './Layout';
import Card from '../components/Card';
import "../css/Home.css";
import Perro from '../images/perro_baño_edit.jpg'
import Maps from '../images/dire_maps.png'
import Turno from '../images/turno.jpg'


function Home() {
    return (
        <Layout>       
            <section className="homelayout">
                <div className="grow1">
                    <Card
                        title="Servicios"
                        description="Ver todos los servicios que ofrecemos"
                        src={Perro}
                    />
                </div>
                <div className="grow1">
                    <Card
                        title="Ubicación"
                        description="Donde nos encuentra"
                        src={Maps}
                    />
                </div>
                <div className="grow1">
                    <Card
                        title="Turno"
                        description="Reserva tu turno vía Whatsapp"
                        src={Turno}
                    />
                </div>
            </section>

            
            
        </Layout>        
    )
}

export default Home