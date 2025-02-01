import React from 'react';
import { Navbar } from './Components/Nav/Nav';
import SectionOne from './Components/SectionOne/SectionOne';
import About from './Components/About/About';
import Airpuch from './Components/Airpuch/Airpuch';
import Hotel from './Components/Hotel/Hotel';
import AtHome from './Components/AtHome/AtHome';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <SectionOne />
      <About />
      <Airpuch />
      <Hotel />
      <AtHome />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
