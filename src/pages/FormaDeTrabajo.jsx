import Layout from './Layout';
import Faq from '../components/Faq';
import data from '../data/formaTrabajo.json';

function FormaDeTrabajo() {
    return (
        <Layout>
            <Faq  data={ data }/>
        </Layout>        
    )
}

export default FormaDeTrabajo