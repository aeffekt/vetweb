import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { createTheme, ThemeProvider, Container, Typography } from "@mui/material";

const theme= createTheme({
    palettle: {
      primary:{
        main:"#013e87",
      },      
      secondary: {
        main:"#2e74c9",
      },
    },
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
    }
  })

const Layout = ({ children }) => {
    return (
        <>  
            <i><small>Página en construcción!</small></i>
            <Header />
            <Navbar />
            <ThemeProvider theme={theme}>
                <Container>
                    <Typography>
                        <div id="layout-content">
                            {children}
                        </div>                
                    </Typography>
                </Container>      
            </ThemeProvider>      
            <WhatsAppIcon />        
            <Footer />                            
        </>
    );
};

export default Layout;
