import React from 'react';
import Footer from '../components/footer';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout min-h-screen flex flex-col justify-between">
                {children}
                <Footer />
        </div>
    );
};

export default Layout;