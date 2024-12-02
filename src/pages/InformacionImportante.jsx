import Layout from './Layout';
import ReactPlayer from 'react-player/youtube'

function InformacionImportante() {
    return (
        <Layout>
            <h1>Informacion Importante</h1>
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=TK81YePqfZE'                
            ></ReactPlayer>
        </Layout>
    )
}

export default InformacionImportante