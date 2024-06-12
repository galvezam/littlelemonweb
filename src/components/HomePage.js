import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';

import CustomersSay from "./CustomersSay";
import Chicago from './Chicago';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      
      <Chicago />
      <Footer />
    </>
  );
}

export default HomePage;