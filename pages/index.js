import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className = "welcome">
      <div className = "container-welcome">
        <img className = "welcome-img" src = "https://cdn.pixabay.com/photo/2017/08/21/04/13/books-2664021_960_720.png"></img>
        </div>
        <div className = "welcome-message">
          <h1 className = "message">DUKE'S EXTREMELY PRETENIOUS BOOK CLUB</h1>
        </div>
        </div>
        <Footer/>
    </>
  );
}