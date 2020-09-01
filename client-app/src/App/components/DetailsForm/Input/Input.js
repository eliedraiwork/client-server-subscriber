import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateProperty, validateField } from '../../../../redux/';
import CheckField from '../../../../logic/CheckFields';

class Input extends Component {

    constructor(props) {
        super();
        this.state = {
            placeholder: props.placeholder,
            type: props.type,
            value: props.value,
            propertyName: props.propertyName,
            hidden: props.hidden,
            isError: props.isError
        }
    }

    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} hidden={this.props.hidden}
                value={this.props.value}
                onChange={(event) => this.handleChange(this.props.propertyName, event.target, this.props.type)}
                className={ this.props.isError? "error-input" : ""} />
        )
    }

    handleChange(field, element, fieldType) {
        const value = element.value;
        this.props.updateProperty(field, value);

        if (CheckField(fieldType, value)) {
            this.props.validateField(this.props.propertyName, true);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        subscriber: state.subscriber,
        validate: state.validate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProperty: (field, value) => dispatch(updateProperty(field, value)),
        validateField: (field, value) => dispatch(validateField(field, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);

