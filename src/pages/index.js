import React, { useState } from 'react'

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggleHandler={toggleHandler} />
      <Navbar toggleHandler={toggleHandler} />
    </>
  )
}

export default Home;
