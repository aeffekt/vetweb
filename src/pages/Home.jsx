import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/MyCard';
import Carousel from '../components/Carousel';
import { Box, Stack } from '@mui/material';


function Home() {
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
      <Box sx={{ py: 2 }}>       

        {/* Stack para hacer los cards responsivos */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"          
        >
          {cardData.map((card, index) => (
                <Box key={index} sx={{ width: { xs: '100%', sm: '30%' } }}>
                  {card.isExternal ? (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="no-decoration">
                      <Card
                        title={card.title}
                        description={card.content}
                        src={card.image}
                      />
                    </a>
                  ) : (
                    <Link to={card.link} className="no-decoration">
                      <Card
                        title={card.title}
                        description={card.content}
                        src={card.image}
                      />
                    </Link>
                  )}
                </Box>
          ))}
        </Stack>
      </Box>

      <a href="/servicios" className="no-decoration">
        <Carousel />
      </a>
      
      <Box sx={{ mt: 6 }}>       
        <a href="/tutoriales" title="Ir a tutoriales">
          <img
              decoding="async"
              src="/images/p1.jpg"
              alt="Imagen Perro"
              style={{
                  width: 'auto',
                  height: '300px',
                  margin: '0 auto',

              }}
          />
          <img
              decoding="async"
              src="/images/s1b.jpg"
              alt="Imagen Gato"
              style={{
                  width: 'auto',
                  height: '300px',
                  margin: '0 auto',

              }}
          />
          <img
              decoding="async"
              src="/images/p2.jpg"
              alt="Imagen Perro"
              style={{
                  width: 'auto',
                  height: '300px',
                  margin: '0 auto',

              }}
          />
        </a>    
      </Box>
    </Layout>
  );
}

export default Home;
