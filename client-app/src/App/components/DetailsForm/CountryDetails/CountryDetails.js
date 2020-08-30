import React from 'react';
import './CountryDetails.css';

class CountryDetails extends React.Component {
    render() {
        return (

            <div className="CountryDetails">

                <h2>Select a country</h2>

                <div className="details">
                    <div className="name">
                        <select>
                            <option value="FR">France</option>
                            <option value="UK">United Kingdom</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>

                    <div className="currency"></div>
                </div>



            </div>
        );
    }
}

export default CountryDetails;
