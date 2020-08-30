import React from 'react';
import './DetailsForm.css';

import ClientDetails from './ClientDetails/ClientDetails.js';
import CountryDetails from './CountryDetails/CountryDetails.js';
import BankDetails from './BankDetails/BankDetails.js';

class DetailsForm extends React.Component {
    render() {

        let state = 1;
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
                break;
        }

        return (
            <div className="DetailsForm">
                { details }
            </div>
        )
    }

}

export default DetailsForm;
