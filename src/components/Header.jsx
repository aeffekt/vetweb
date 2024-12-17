import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';

function Header() {
    return (
        <AppBar position="static" 
            sx={{ 
                backgroundColor: 'primary.main', p: 2, 
                backgroundImage: "url('/images/background.png')",
                backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el espacio
                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                backgroundPosition: 'center', // Centra la imagen
            }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box component={Link}
                    to="/"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textDecoration: 'none',
                        m: 2,
                    }}>                    
                                 
                    <img
                        decoding="async"
                        src="/images/logo_dac.png"
                        alt="Logo DAC"
                        style={{ 
                            height: '200px',
                            
                        }}
                    />                    
                   
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
