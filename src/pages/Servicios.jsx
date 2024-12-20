import React from 'react';
import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Card  from '../components/MyCard';
import Layout from '../components/Layout';
import serviciosData from '../data/servicios.json';

// Import all service JSON files
import dermatologiaData from '../data/servicio/dermatologia.json';
import testAlergiaData from '../data/servicio/testalergia.json';
import citologiaData from '../data/servicio/citologia.json';
import lamparaWoodData from '../data/servicio/lamparawood.json';
import otoscopiaData from '../data/servicio/otoscopia.json';
import histopatologiaData from '../data/servicio/histopatologia.json';
import inmunoterapiaData from '../data/servicio/inmunoterapia.json';
import micologiaData from '../data/servicio/micologia.json';

const serviceDataMap = {
  dermatologia: dermatologiaData,
  testalergia: testAlergiaData,
  citologia: citologiaData,
  lamparawood: lamparaWoodData,
  otoscopia: otoscopiaData,
  histopatologia: histopatologiaData,
  inmunoterapia: inmunoterapiaData,
  micologia: micologiaData
};

function Servicios() {
  return (
    <Layout>
      <Box sx={{ py: 2 }}>       
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          {serviciosData.rows.map((servicio, index) => {
            const serviceType = servicio.link.split('/').pop();
            const serviceData = serviceDataMap[serviceType];
            
            return (
              <Box key={index} 
                sx={{ 
                  width: { xs: '100%', sm: '30%', md: '23%' }, 
                  pb: 4                  
                  }}
                >
                <Link to={servicio.link} className="no-decoration" state={{ serviceData }}>
                  <Card
                    title={servicio.title}
                    description={servicio.description || ""}
                    src={servicio.image}
                  />
                </Link>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Layout>
  );
}

export default Servicios;

