import React from 'react';
import { Container, Divider } from '@mui/material';
import Layout from './Layout';
import CarouselServicio from '../components/Carousel';
import { PlantillaInfo } from '../components/PlantillaInfo'
import allergyContent from "../data/servicio/allergy.json"
import dermatologyContent from "../data/servicio/dermatology.json"
import cytologyContent from "../data/servicio/cytology.json"
import woodlampContent from "../data/servicio/woodlamp.json"
import otoscopyContent from "../data/servicio/otoscopy.json"
import histopatologyContent from "../data/servicio/histopatology.json"
import inmunoterapyContent from "../data/servicio/inmunoterapy.json"
import micologicalContent from "../data/servicio/micological.json"

const contentData = [
    { type: 'dermatology', data: dermatologyContent },
    { type: 'allergy', data: allergyContent },    
    { type: 'cytology', data: cytologyContent },
    { type: 'woodlamp', data: woodlampContent },
    { type: 'otoscopy', data: otoscopyContent },
    { type: 'histopatology', data: histopatologyContent },
    { type: 'inmunoterapy', data: inmunoterapyContent },
    { type: 'micological', data: micologicalContent },
    
];

function Servicios() {
    return (
        <Layout>            
            <Container maxWidth="lg" 
                sx={{ 
                    py: 4,                     
                }}>
                {contentData.map((item, index) => (
                    <React.Fragment key={item.type}>
                        <PlantillaInfo content={item.data} />
                        {index < contentData.length - 1 && <Divider sx={{ my: 3 }} />}
                    </React.Fragment>
                ))}
            </Container>
            <CarouselServicio />   
        </Layout>        
    )
}

export default Servicios

