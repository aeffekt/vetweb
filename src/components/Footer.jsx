import { Box, Typography, Divider, Link as MuiLink } from '@mui/material';
import AAmarca from './AAmarca';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                p: 4,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                backgroundImage: "url('/images/b1.png')",
                backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el espacio
                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                backgroundPosition: 'center', // Centra la imagen
            }}
        >
            {/* Logo y datos principales */}
            <Box sx={{ mb: 2 }}>
                <img
                    decoding="async"
                    src="/images/l1.png"
                    alt="Logo DAC"
                    style={{
                        maxWidth: '200px',
                        height: 'auto',
                        margin: '0 auto',
                    }}
                />
            </Box>

            <Typography variant="body1" component="p">
                Médico Veterinario: <b>Diego Gonzalez <i>MP: 4566</i></b>
            </Typography>

            {/* Instagram */}
            <Typography variant="body1" component="p">
                Visítanos en Instagram &nbsp;
                <MuiLink
                    href="https://www.instagram.com/dermatologia.veterinaria.cba/"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: 'inherit', textDecoration: 'none' }}
                    title="Instagram"                >
                    <img
                        decoding="async"
                        src="/images/i5.png"
                        alt="Instagram Logo"
                        style={{ width: '30px', height: 'auto', verticalAlign: 'middle' }}
                    />
                </MuiLink>
            </Typography>

            <Typography variant="caption" component="small" sx={{ fontStyle: 'italic' }}>
                Córdoba - Argentina
            </Typography>

            {/* Divider */}
            <Divider sx={{ my: 2, backgroundColor: 'secondary.main' }} />
            <AAmarca sx={{ textDecoration: 'none' }} />
        </Box>
    );
}

export default Footer;
