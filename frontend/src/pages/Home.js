import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Game from '../components/Game';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
    </div>
  );
}

export default Home;