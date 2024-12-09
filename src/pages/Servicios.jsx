import Layout from './Layout';
import Faq from '../components/Faq';
import data from '../data/servicios.json';
import Carousel from '../components/Carousel';

function Servicios() {
    return (
        <Layout>      
            <Carousel></Carousel>      
            <Faq data={ data }/>
        </Layout>        
    )
}

export default Servicios