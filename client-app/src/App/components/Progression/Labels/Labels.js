import React from 'react';
import './Labels.css';


class Labels extends React.Component {
    render() {
        return (
            <div className="Labels">
                <div className="labels">
                    <div className="client label">
                        Beneficiary
                    </div>


                    <div className="country label">
                        Country and Currency
                    </div>

                    <div className="bank label">
                        Bank Details
                    </div>
                </div>

            </div>
        );
    }
}

export default Labels;