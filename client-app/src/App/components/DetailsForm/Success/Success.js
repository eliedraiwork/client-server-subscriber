import React from 'react'
import Correct from './correct.png';
import './Success.css';

class Success extends React.Component {
    render() {
        return (
            <div className="Success">
                <div><img src={Correct} alt=""/></div>
                <div><p>Congrats, you just subscribed to our services</p></div>
            </div>
        )
    }
}

export default Success;
