import Layout from './Layout';
import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

function Contact() {
  const whatsappMessage = "Hola! Quisiera coordinar una consulta dermatologica.";

  return (
    <Layout>
      <Box sx={{ textAlign: 'center', maxWidth: 600, margin: '0 auto', padding: 4, backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ backgroundColor: 'primary.main', color: 'white', padding: '10px 20px', borderRadius: 1 }}>
          CONTACTO
        </Typography>

        {/* Horario */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" sx={{ backgroundColor: 'secondary.main', color: 'white', padding: '8px', borderRadius: 1, marginBottom: 1 }}>
            HORARIO
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
            Horario de lunes a viernes de 09:00 a.m. a 13:00 p.m.
          </Typography>
        </Box>

        {/* Ubicación */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" sx={{ backgroundColor: 'secondary.main', color: 'white', padding: '8px', borderRadius: 1, marginBottom: 1 }}>
            UBICACIÓN
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
            Oncativo 320
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
            Clínica veterinaria Nefroncovet
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
            Córdoba Capital
          </Typography>
        </Box>

        {/* WhatsApp - Agenda una cita */}
        <Box>          
          <Link 
            href={`https://api.whatsapp.com/send?phone=+54%209%20351%20217-2630&text=${encodeURIComponent(whatsappMessage)}`} 
            target="_blank"
            sx={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'primary.dark',
              marginTop: 2,
              backgroundColor: '#25d366',  // Color WhatsApp
              padding: '8px 16px',
              borderRadius: 2,
              boxShadow: 2,
              '&:hover': {
                backgroundColor: '#128c7e',  // Darker shade on hover
              }
            }}
          >
            <WhatsApp sx={{ marginRight: 1 }} />
            <Typography variant="body1">Envíanos un mensaje por WhatsApp</Typography>
          </Link>
        </Box>
        </Box>
    </Layout>
    
  );
}

export default Contact;
