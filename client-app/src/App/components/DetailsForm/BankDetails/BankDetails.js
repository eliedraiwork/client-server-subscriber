import React from 'react';
import './BankDetails.css';

import { connect } from 'react-redux';
import { updateProperty } from '../../../../redux/';

class BankDetails extends React.Component {
    render() {
        return (

            <div className="BankDetails">
                <h2>Enter your bank details</h2>
                <div className="bank-infos">
                    <input type="text" placeholder="IBAN" value={this.props.iban} onChange={(event)=> this.handleChange('iban', event.target.value)}/>
                    <input type="text" placeholder="BIC CODE" value={this.props.bic} onChange={(event)=> this.handleChange('bic', event.target.value)}/>
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
