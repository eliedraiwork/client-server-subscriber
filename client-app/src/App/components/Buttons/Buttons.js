import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
  render() {

    
    return (
      <div className="Buttons">
        <button id="btn-previous">Previous</button>
        <button id="btn-next" onClick={(e) => console.log('clicked')}>Next</button>
      </div>
    );
  }
}


export default Buttons;
