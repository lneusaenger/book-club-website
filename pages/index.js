import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className = "welcome">
        <div className = "welcome-message">
          Duke's Extremely Pretentious Book Club
          </div>
      </div>
        <Footer/>
    </>
  );
}