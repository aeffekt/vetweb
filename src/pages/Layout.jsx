import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';


const Layout = ({ children }) => {
    return (
        <>  
          <i><small>Página en construcción!</small></i>
          <Header />
          <Navbar />            
            <div id="layout-content">
                {children}
            </div>
          <WhatsAppIcon />        
          <Footer />
        </>
    );
};

export default Layout;
