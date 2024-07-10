// U08282838

import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import { Header, Footer } from './components/Header';

const Team = [
  {name: 'Ryan Knight', role: 'CEO', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/800px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg'},
  {name: 'Tyler Young', role: 'HR Director', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg/800px-Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg'},
  {name: 'Mark Darfler', role: 'Finance Director', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/MarkCuban2023.jpg/800px-MarkCuban2023.jpg'},

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