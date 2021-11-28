
import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/SectionInit/Section";
import Project from "./Components/Projects/Project";
import SobreoProjeto from "./Components/SobreoProjeto/SobreoProjeto";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      
      <Navbar />
      <Section />
      <SobreoProjeto />
      <Footer />
    </>
  );
}

export default App;
