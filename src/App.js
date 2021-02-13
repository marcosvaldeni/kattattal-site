import React from 'react';
import  { BrowserRouter } from 'react-router-dom';

import Nav from './components/Navbar';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <h1>Kattattal</h1>
      <GlobalStyle />
    </>
  );
}

export default App;
