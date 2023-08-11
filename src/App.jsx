import { useState } from 'react'
import React from 'react';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import ProfilePicture from './components/ProfilePicture';
import SocialMediaLinks from './components/SocialMediaLinks';

function App() {
  
  return (
    <div className="App">
    <ProfilePicture />
    
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact /> 
      <Footer />  
    </div>
  )
}

export default App
