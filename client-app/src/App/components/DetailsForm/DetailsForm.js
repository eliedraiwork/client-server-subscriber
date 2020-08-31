import React from 'react';
import './DetailsForm.css';

import { connect } from 'react-redux';

import ClientDetails from './ClientDetails/ClientDetails.js';
import CountryDetails from './CountryDetails/CountryDetails.js';
import BankDetails from './BankDetails/BankDetails.js';

class DetailsForm extends React.Component {
    render() {

        let state = this.props.step;
        let details = {};

        switch (state) {
            case 1:
                details = <ClientDetails />;
                break;

            case 2:
                details = <CountryDetails />;
                break;

            case 3:
                details = <BankDetails />;
                break;

            default:
                details = <div></div>
                break;
        }

        return (
            <div className="DetailsForm">
                {details}
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsForm);

