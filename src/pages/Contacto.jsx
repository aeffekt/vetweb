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
            Lunes a Viernes de 09:00 a.m. a 13:00 p.m.
          </Typography>
        </Box>

        {/* Ubicación */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h6" sx={{ backgroundColor: 'secondary.main', color: 'white', padding: '8px', borderRadius: 1, marginBottom: 1 }}>
            UBICACIÓN
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
            <b>Clínica veterinaria Nefroncovet</b>
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
            Oncativo 320
          </Typography>          
          <Typography variant="body1" sx={{ fontSize: '1rem', color: '#333' }}>
            Córdoba Capital
          </Typography>
          <Box sx={{ marginBottom: 4, width: '100%', height: 300 }}>
            <iframe
              title="Ubicación de la clínica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5726595289366!2d-64.17898492426611!3d-31.41049997409136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329875fa24017d%3A0xfbf59f9c120a3efd!2sOncativo%20320%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1702836537115!5m2!1sen!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
        <br />
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
