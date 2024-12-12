import Layout from './Layout';
import Faq from '../components/Faq';
import ImageDisplay from '../components/ImageDisplay';
import data from '../data/formaTrabajo.json';

function FormaDeTrabajo() {
    return (
        <Layout>
            <ImageDisplay></ImageDisplay>
            <Faq  data={ data }/>
        </Layout>        
    )
}

export default FormaDeTrabajo