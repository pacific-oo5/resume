import React from 'react';
import Navbar from './components/Navbar'
import MainRoutse from './MainRoutse'
import Footer from './footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return(
    <>
    <Navbar/>
      <MainRoutse/>
      <Footer/>
    </>
  );
};

export default App;