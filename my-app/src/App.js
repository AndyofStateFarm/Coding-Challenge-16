// U08282838

import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import { Header, Footer } from './components/Header';

const Team = [
  {name: 'Ryan Knight', role: 'CEO', photo: 'Ryan.jpg'},
  {name: 'Tyler Young', role: 'HR Director', photo: 'Tyler.jpg'},
  {name: 'Mark Darfler', role: 'Finance Director', photo: 'Mark.jpg'},

];

function App() {
  return (
    <div className="App">
      <Header title="Meet the Team" />
      <Gallery Members={Team} />
      <Footer />
    </div>
  );
}

export default App;