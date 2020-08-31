import React from 'react';
import './App.css';

//  Import react-redux tools
import { Provider } from 'react-redux';
import store from '../redux/store';

//  Import components
import Header from './components/Header/Header';
import Progression from './components/Progression/Progression.js';
import Buttons from './components/Buttons/Buttons.js';
import DetailsForm from './components/DetailsForm/DetailsForm.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Progression />
        <hr />
        <DetailsForm />
        <Buttons />
      </div>
    </Provider>

  );
}

export default App;
