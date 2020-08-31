import React from 'react';
import './CountryDetails.css';
import Country from './Country/Country';


class CountryDetails extends React.Component {

    constructor() {
        super();

        this.state = {
            countryValues: []
        }
    }

    componentDidMount() {
        const axios = require('axios');
        axios.get('http://localhost:4000/country-values').then((response) => {
            this.countryValues = response.data;
            this.setState({ countryValues: response.data })
        }).catch(err => console.log(err));
    }

    allCountries() {
        return this.state.countryValues.map(country => {
            return (
                <React.Fragment>
                    <Country 
                        name={country.name} 
                        currency={country.currency} 
                        code={country.key}
                        key={country.key} 
                        flag={country.flag}/>
                </React.Fragment>
            );
        });
    }

    render() {
        return (
            <div className="CountryDetails">
                <h2>Select a country</h2>
                <div className="details">
                    {this.allCountries()}
                </div>
            </div>
        );
    }

    fetchCountryValues = async () => {
        const axios = require('axios');
        await axios.get('http://localhost:4000/country-values').then((response) => {
            this.countryValues = response.data;
        }).catch(err => console.log(err));
    }

}

export default CountryDetails;
