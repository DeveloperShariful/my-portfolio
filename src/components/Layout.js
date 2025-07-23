import React from 'react';
import Header from './Header';
import Footer from './Footer'; // ফুটার ইম্পোর্ট করা হয়েছে

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer /> {/* ফুটার এখানে যোগ করা হয়েছে */}
    </div>
  );
};

export default Layout;