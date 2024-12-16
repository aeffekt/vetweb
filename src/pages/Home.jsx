import { Link } from 'react-router-dom';
import Layout from './Layout';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import { Box, Typography, Stack } from '@mui/material';
import Perro from '../images/consulta2.jpg';
import Maps from '../images/dire_maps.jpg';
import Turno from '../images/turno.jpg';

function Home() {
  const cardData = [
    {
      title: "Servicios",
      description: "Ver todos los servicios que ofrecemos",
      src: Perro,
      link: "/servicios",
      isExternal: false,
    },
    {
      title: "Ubicación",
      description: "Donde nos encuentra",
      src: Maps,
      link: "https://www.google.com/maps/place/Oncativo+320,+X5000+C%C3%B3rdoba",
      isExternal: true,
    },
    {
      title: "Turno",
      description: "Reserva tu turno vía Whatsapp",
      src: Turno,
      link: "https://api.whatsapp.com/send/?phone=+54%209%203512%2017-2630&text=Hola!%20me%20gustar%C3%ADa%20reservar%20un%20turno%20para%20mi%20mascota,%20saludos",
      isExternal: true,
    }
  ];

  return (
    <Layout>
      <Box sx={{ py: 2 }}>       

        {/* Stack para hacer los cards responsivos */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {cardData.map((card, index) => (
            <Box key={index} sx={{ width: { xs: '100%', sm: '30%' } }}>
              {card.isExternal ? (
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="no-decoration">
                  <Card
                    title={card.title}
                    description={card.description}
                    src={card.src}
                  />
                </a>
              ) : (
                <Link to={card.link} className="no-decoration">
                  <Card
                    title={card.title}
                    description={card.description}
                    src={card.src}
                  />
                </Link>
              )}
            </Box>
          ))}
        </Stack>
      </Box>

      <Carousel />
    </Layout>
  );
}

export default Home;
