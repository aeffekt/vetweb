import Layout from './Layout';
import Card from '../components/Card';
import "../css/Home.css";


function Home() {
    return (
        <Layout>       
            <section className="layout">
                <div className="grow1">
                    <Card
                        title="Servicio"
                        description="Ver todos los servicios que ofrecemos"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"                        
                    />
                </div>
                <div className="grow1">
                    <Card
                        title="Ubicación"
                        description="Donde nos encontramos"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"                        
                    />
                </div>
                <div className="grow1">
                    <Card
                        title="Turno"
                        description="Reserva tu turno vía Whatsapp"
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"                        
                    />
                </div>
            </section>

            
            
        </Layout>        
    )
}

export default Home