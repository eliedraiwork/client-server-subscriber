import React from 'react';
import './App.css';

//  Import components
import Header from './components/Header/Header';
import Progression from './components/Progression/Progression.js';
import Buttons from './components/Buttons/Buttons.js';
import DetailsForm from './components/DetailsForm/DetailsForm.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Progression />
      <hr />
      <DetailsForm />
      <Buttons />
    </div>
  );
}

export default App;
