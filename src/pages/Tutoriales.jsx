import Layout from './Layout';
import Faq from '../components/Faq';
import data from '../data/tutoriales.json';

function Tutoriales() {
    return (
        <Layout>            
            <Faq  data={ data }/>
        </Layout>
    )
}

export default Tutoriales