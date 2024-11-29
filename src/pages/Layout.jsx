import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';


const Layout = ({ children }) => {
    return (
        <>            
            <body>                
                <Header />                
                <Navbar />
                {children}        
                <WhatsAppIcon />        
                <Footer />                
            </body>
        </>
    );
};

export default Layout;
