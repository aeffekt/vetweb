import { Box, Typography, Divider, Link as MuiLink } from '@mui/material';
import Logoinsta from '/images/instagramlogo.png';
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
            }}
        >
            {/* Logo y datos principales */}
            <Box sx={{ mb: 2 }}>
                <img
                    decoding="async"
                    src="/images/logo_dac.png"
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
                    title="Instagram"
                >
                    <img
                        decoding="async"
                        src={Logoinsta}
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
