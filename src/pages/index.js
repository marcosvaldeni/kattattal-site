import React, { useState } from 'react'

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import Info from '../components/Info';
import Games from '../components/Games';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree  } from '../services/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleHandler={toggleHandler} />
      <Navbar toggleHandler={toggleHandler} />
      <Landing />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Games />
      <Footer />
    </>
  )
}

export default Home;
