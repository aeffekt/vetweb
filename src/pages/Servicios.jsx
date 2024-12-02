import Layout from './Layout';
import Faq from '../components/Faq';
import data from '../data/servicios.json';

function Servicios() {
    return (
        <Layout>            
            <Faq data={ data }/>
        </Layout>
        
    )
}

export default Servicios