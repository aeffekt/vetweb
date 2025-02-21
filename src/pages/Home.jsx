import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/MyCard';
import Carousel from '../components/Carousel';
import MyBanner from '../components/MyBanner';
import { Box, Stack } from '@mui/material';

function Home() {
  // Puedes ajustar este valor para controlar el tamaño de las tarjetas en pantallas pequeñas
  const smallScreenCardWidth = '30%';

  const cardData = [
    {
      title: "Servicios",
      content: "Ver todos los servicios que ofrecemos",
      image: '/images/i10.png',
      link: "/servicios",
      isExternal: false,
    },
    {
      title: "Ubicación",
      content: "Donde nos encuentra en maps",
      image: '/images/i11.png',
      link: "https://www.google.com/maps/place/Oncativo+320,+X5000+C%C3%B3rdoba",
      isExternal: true,
    },
    {
      title: "Turno",
      content: "Reserva tu turno vía Whatsapp",
      image: '/images/i9.png',
      link: "https://api.whatsapp.com/send/?phone=+54%209%203512%2017-2630&text=Hola!%20me%20gustar%C3%ADa%20reservar%20un%20turno%20para%20mi%20mascota,%20saludos",
      isExternal: true,
    }
  ];

  return (
    <Layout>
      
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        {/* Stack para hacer los cards responsivos */}
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{
            overflowX: { xs: 'auto', sm: 'visible' },
            width: '100%',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            scrollbarWidth: 'none',
          }}
        >
          {cardData.map((card, index) => (
            <Box 
              key={index} 
              sx={{ 
                width: { xs: smallScreenCardWidth, sm: '30%' },
                flexShrink: 0,
              }}
            >
              {card.isExternal ? (
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="no-decoration">
                  <Card
                    title={card.title}
                    description={card.content}
                    src={card.image}
                    sx={{
                      '& .MuiCardMedia-root': {
                        width: '100%',
                        '@media (max-width:600px)': {
                          width: '40%',
                        },
                      },
                    }}
                  />
                </a>
              ) : (
                <Link to={card.link} className="no-decoration">
                  <Card                    
                    title={card.title}
                    description={card.content}
                    src={card.image}
                    sx={{
                      '& .MuiCardMedia-root': {
                        width: '100%',
                        '@media (max-width:600px)': {
                          width: '40%',
                        },
                      },
                    }}
                  />
                </Link>
              )}
            </Box>
          ))}
        </Stack>
      </Box>

      <MyBanner
              src={"/images/b10.jpg"}
              alt={`Cat & Dog`}
              height={ "250px"}              
              sx={{ my: "80px" }} 
            />

      <a href="/servicios" className="no-decoration">
        <Carousel />
      </a>
    </Layout>
  );
}

export default Home;
