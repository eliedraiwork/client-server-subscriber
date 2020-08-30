import React from 'react';
import './BankDetails.css';

class BankDetails extends React.Component {
    render() {
        return (

            <div className="BankDetails">

                <div className="bank-infos">
                    <input type="text" placeholder="IBAN"/>
                    <input type="text" placeholder="BIC CODE"/>
                </div>

            </div>
        );
    }
}

export default BankDetails;
