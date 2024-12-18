import { Card as MuiCard, CardContent, CardMedia, Typography } from '@mui/material';

function Card(props) {
  return (
    <MuiCard sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      {/* Imagen de la Card */}
      <CardMedia
        component="img"
        height="160"
        image={props.src}
        alt="Image"
        sx={{
          filter: 'hue-rotate(350deg) saturate(30%)',
          transition: 'transform 0.3s ease', // Agrega transición suave
          '&:hover': {
            transform: 'scale(1.15)', // Agranda la imagen al 10% cuando hover
            filter: 'none',
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

export default Card;
