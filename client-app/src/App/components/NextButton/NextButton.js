import React from 'react';
import './NextButton.css';

class NextButton extends React.Component {
    render() {
        return (
            <div className="NextButton">
              <button onClick={(e) => console.log('clicked')}>Next</button>
            </div>
          );
    }
}


export default NextButton;
