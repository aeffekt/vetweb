import React from 'react';
import { Container, Divider } from '@mui/material';
import Layout from './Layout';
import CarouselServicio from '../components/Carousel';
import { PlantillaInfo } from '../components/PlantillaInfo'
import allergyContent from "../data/allergy.json"
import dermatologyContent from "../data/dermatology.json"
import cytologyContent from "../data/cytology.json"
import woodlampContent from "../data/woodlamp.json"
import otoscopyContent from "../data/otoscopy.json"

const contentData = [
    { type: 'dermatology', data: dermatologyContent },
    { type: 'allergy', data: allergyContent },    
    { type: 'cytology', data: cytologyContent },
    { type: 'otoscopy', data: otoscopyContent },
    { type: 'woodlamp', data: woodlampContent },
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

