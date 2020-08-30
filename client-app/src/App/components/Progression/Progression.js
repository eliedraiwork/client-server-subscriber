import React from 'react';
import './Progression.css';

import ProgressBar from './ProgressBar/ProgressBar';
import Labels from './Labels/Labels';

class Progression extends React.Component {
    render() {
        return (

            

            <div className="Progression">
                
                <ProgressBar />
                <Labels />
            </div>
        );
    }
}

export default Progression;
