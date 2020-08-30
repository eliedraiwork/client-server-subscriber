import React from 'react';
import './App.css';

//  Import components
import Header from './components/Header/Header';
import Progression from './components/Progression/Progression.js';
import NextButton from './components/NextButton/NextButton.js';
import DetailsForm from './components/DetailsForm/DetailsForm.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Progression />
      <hr />
      <DetailsForm />
      <NextButton />
    </div>
  );
}

export default App;
