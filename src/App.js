import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import data from './components/data'
import Travels from './components/Travels'

function App() {
  const myTravels = data.map(travel => <Travels key={travel.id} {...travel} />)

  return (
    <div>
      <Navbar />
      <section className='card'>
        {myTravels}
      </section>
    </div>
  );
}

export default App;
