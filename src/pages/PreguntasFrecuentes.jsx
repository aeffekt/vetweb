import Layout from './Layout';
import Faq from '../components/Faq';
import data from '../data/preguntas.json';

function PreguntasFrecuentes() {
    return (
        <Layout>            
            <Faq  data={ data }/>
        </Layout>
    )
}

export default PreguntasFrecuentes