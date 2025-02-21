import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Info } from '@mui/icons-material';
import Layout from '../components/Layout';
import MyBanner from '../components/MyBanner';

function QuienesSomos() {
  return (
    <Layout>
      <MyBanner
              src={"/images/b10.jpg"}
              alt={`Cat & Dog`}
              height={ "220px"}              
              sx={{ my: "20px" }} 
            />

      <Container sx={{ maxWidth: 'md', paddingY: 4 }}>
        {/* Título */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            color: 'primary.main',
            marginBottom: 4,
            textTransform: 'uppercase',
          }}
        >
          ¿Quiénes somos?
        </Typography>

        {/* Sección principal con icono */}
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            padding: 3,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            marginBottom: 4,
          }}
        >
          <Info sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Sobre nosotros
            </Typography>
            <Typography variant="body1">
              Somos un servicio especializado en dermatología veterinaria. Nuestro compromiso está dirigido a brindarte un diagnóstico adecuado y emplear herramientas terapéuticas personalizadas a las necesidades de tu mascota.
            </Typography>
          </Box>
        </Box>

        {/* Sección de más detalles */}
        <Box
          sx={{
            padding: 3,
            backgroundColor: 'secondary.main',
            color: 'white',
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Nuestro compromiso
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Nos especializamos en ofrecer un diagnóstico preciso y soluciones terapéuticas adecuadas a la salud dermatológica de tu mascota.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}

export default QuienesSomos;

