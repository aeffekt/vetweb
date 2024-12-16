import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Quienes Somos', path: '/QuienesSomos' },
	{ label: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' },
    { label: 'Contacto', path: '/Contacto' },
];


function Navbar() {
    return (
        <nav className="navbar-container">
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                }}
            >
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </nav>
    );
}

export default Navbar;
