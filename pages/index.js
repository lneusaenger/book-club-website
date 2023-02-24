import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';


export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className = "welcome">
        Welcome to Duke's Extremely Pretentious Book Club
        </div>
    </>
  );
}