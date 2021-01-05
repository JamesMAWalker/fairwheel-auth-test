import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/client';

import Link from 'next/link';

const Home = () => {
  const [session, setSession] = useSession();

  return (
    <main className='home'>
      {!session && (
        <div className='landing-container'>
          <h1>Welcome to Fairwheel Bikes.</h1>
          <div className='option-buttons'>
            <button className='sign-in' onClick={signIn}>
              Sign In
            </button>
            <button className='sign-up' >
              Sign Up
            </button>
          </div>
        </div>
      )}
      {session && (
        <div className='landing-container'>
          <h1>Welcome to FWB, {session.user.email}</h1>
          <div className='option-buttons'>
            <p>Purchase History</p>
            <ul>
              <li>EE Brakes: Diablo Ed.</li>
              <li>Lightweight Meillenstein 700c</li>
              <li>Tubolito 700x18-23mm</li>
              <li>Tubolito 700x18-23mm</li>
            </ul>
            <button className='sign-out' onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
