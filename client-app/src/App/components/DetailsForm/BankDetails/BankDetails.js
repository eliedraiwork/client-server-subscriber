import React from 'react';
import './BankDetails.css';

import { connect } from 'react-redux';
import { updateProperty } from '../../../../redux/';

import Input from '../Input/Input';

class BankDetails extends React.Component {
    render() {
        return (

            <div className="BankDetails">
                <h2>Enter your bank details</h2>
                <div className="bank-infos">
                    <Input placeholder="IBAN" type="number" value={this.props.iban} propertyName="iban"/>
                    <Input placeholder="BIC" type="number" value={this.props.bic} propertyName="bic"/>
                </div>
            </div>
        );
    }

    handleChange(field, value) {
        this.props.updateProperty(field, value);
    }
}

const mapStateToProps = (state) => {
    return {
        iban: state.subscriber.iban,
        bic: state.subscriber.bic
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProperty: (field, value) => dispatch(updateProperty(field, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankDetails);
