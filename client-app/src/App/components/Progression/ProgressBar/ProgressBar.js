import React from 'react';
import './ProgressBar.css';
import { connect } from 'react-redux';

class ProgressBar extends React.Component {
    render() {

        var progressionClass = "";
        switch (this.props.step) {
            case 1: progressionClass = "progress-bar-step-1";
                break;
            case 2: progressionClass = "progress-bar-step-2";
                break;
            default: progressionClass = "progress-bar-step-3";
                break;
        }
        return (

            

            <div className="ProgressBar">
                <div id="progressBar">
                    <div id="completed" className={progressionClass}>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        step: state.step
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);

