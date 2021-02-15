import React, { useState } from 'react'

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Landing from '../components/LandingSection';
import Info from '../components/Info';
import { homeObjOne } from '../services/data';

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
    </>
  )
}

export default Home;
