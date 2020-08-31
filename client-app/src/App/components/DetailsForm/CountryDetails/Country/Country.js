import React from 'react';
import './Country.css';
import { connect } from 'react-redux';
import { updateProperty } from '../../../../../redux/';

class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    render() {

        return (

            <div className={this.props.country === this.props.code?"Country selected":"Country"} onClick={(event)=> this.handleChange('country', this.props.code)}>
                <div className="flag">
                    <img src={this.props.flag}  alt={this.props.flag}/>

                </div>
                <div className="name">
                    {this.props.name}
                </div>

                <div className="currency">
                    {this.props.currency}
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
        country: state.subscriber.country
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProperty: (field, value) => dispatch(updateProperty(field, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);

