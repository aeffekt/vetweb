import React from 'react';
import { Box, Divider } from '@mui/material';
import Layout from '../components/Layout';
import { Acordion } from '../components/Acordion'

import baño from "../data//tutorial/baño-perro.json"
import crema from "../data//tutorial/crema-piel.json"
import gotas from "../data//tutorial/gotas-otitis.json"
import locionAntiseptica from "../data//tutorial/locion-antiseptica.json"
import locionHumectante from "../data//tutorial/locion-humectante.json"


const contentData = [
    { data: baño },
    { data: crema },
    { data: gotas },
    { data: locionAntiseptica },
    { data: locionHumectante },
];

function Tutoriales() {
    return (
        <Layout>            
            <Box 
                sx={{ 
                    py: 4,                     
                }}>
                {contentData.map((item, index) => (
                    <React.Fragment key={item.type}>
                        <Acordion content={item.data} />
                        {index < contentData.length - 1 && <Divider sx={{ my: 3 }} />}
                    </React.Fragment>
                ))}
            </Box>            
        </Layout>        
    )
}

export default Tutoriales
