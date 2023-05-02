import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'



function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;
