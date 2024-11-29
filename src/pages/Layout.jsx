import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Layout = ({ children }) => {
    return (
        <>            
            <body>                
                <Header />                
                <Navbar />
                {children}                
                <Footer />                
            </body>
        </>
    );
};

export default Layout;
