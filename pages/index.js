import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className = "welcome">
        <div className = "welcome-message">
          DUKE'S EXTREMELY PRETENTIOUS BOOK CLUB
          </div>
      </div>
        <Footer/>
    </>
  );
}