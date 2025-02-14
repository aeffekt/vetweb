import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material';

function MyCard(props) {
  return (
    <MuiCard sx={{       
      maxWidth: 345, 
      borderRadius: 2, 
      boxShadow: 3, 
      '&:hover': {                        
        boxShadow: 10,
      },
    }}>
      {/* Imagen de la Card */}
      <CardMedia
        component="img"
        height="180"
        image={props.src}
        alt="Image"
        sx={{          
          filter: 'none',
          transition: 'transform 0.3s ease', // Agrega transición suave
          '&:hover': {
            transform: 'scale(1.15)', // Agranda la imagen al 15% cuando hover
            filter: 'hue-rotate(330deg) saturate(400%)',            
          },
          '@media (max-width:600px)': {
            height: '80px', // Ajusta el tamaño de la imagen en pantallas pequeñas
          },
        }}
      />

      <CardContent sx={{
        '@media (max-width:600px)': {
          padding: '8px', // Ajusta el padding del contenido en pantallas pequeñas
        },
      }}>
        {/* Título */}
        <Typography 
          variant="h5" 
          component="h2" 
          sx={{ 
            fontWeight: 500,
            '@media (max-width:600px)': {
              fontSize: '1rem', // Hace el texto más pequeño en pantallas pequeñas
            },
          }}>
          {props.title}
        </Typography>

        {/* Descripción */}
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            '@media (max-width:600px)': {
              fontSize: '0.6rem', // Hace el texto más pequeño en pantallas pequeñas
            },
          }}>
          {props.description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default MyCard;
