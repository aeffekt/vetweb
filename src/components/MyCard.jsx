import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material';

function MyCard(props) {
  return (
    <MuiCard sx={{ 
                    maxWidth: 345, 
                    borderRadius: 2, 
                    boxShadow: 3, 
                    '&:hover': {                        
                        boxShadow: 10,
                      }
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
            transform: 'scale(1.15)', // Agranda la imagen al 10% cuando hover
            filter: 'hue-rotate(15deg) saturate(130%)',            
          },
        }}
      />

      <CardContent>
        {/* Título */}
        <Typography variant="h5" component="h2" sx={{ fontWeight: 500 }}>
          {props.title}
        </Typography>

        {/* Descripción */}
        <Typography variant="body2" color="text.secondary" >
          {props.description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default MyCard;
