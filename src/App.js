import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./Components/Hero";
import { SiderDataOne } from "./Data/SiderData";
import DropDown from "./Components/dropDown";
import InfoSection from "./Components/InfoSection";
import { InfoDataOne, InfoDataTwo } from "./Data/InfoData";
import Footer from "./Components/Footer";
import Service from "./Components/Services";

/////////////  close menu and open menu functions /////////////////////
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  //////////////// close //////////////////////////
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SiderDataOne} />
      <InfoSection {...InfoDataTwo} />
      <Service />
      <InfoSection {...InfoDataOne} />
      <Footer />
    </>
  );
}

export default App;
