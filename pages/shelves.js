import React, { useState, useEffect } from 'react';
import Shelf from '../components/Shelf';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Shelves() {
    const myShelves = require("../data/past-reads.json");
  
    return (
      <div>
        <Navbar />
        <h1 className = "shelves-heading">W H A T &nbsp; W E ' V E &nbsp; R E A D</h1>
        <div className = "shelves-container">
            {myShelves.map((thisYear) => (
            <Shelf key={thisYear.Year} year={thisYear.Year} jsonUrl={thisYear.Link} />
            ))}
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Shelves;
  
