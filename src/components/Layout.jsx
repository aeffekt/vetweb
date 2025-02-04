import HeaderMain from './HeaderMain';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppIcon from './WhatsAppIcon';


const Layout = ({ children }) => {
    return (
        <>           
          <HeaderMain />
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
