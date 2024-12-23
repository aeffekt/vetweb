import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppIcon from './WhatsAppIcon';


const Layout = ({ children }) => {
    return (
        <>           
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
