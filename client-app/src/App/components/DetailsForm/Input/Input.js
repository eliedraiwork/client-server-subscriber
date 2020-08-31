import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateProperty } from '../../../../redux/';
import CheckField from '../../../../logic/CheckFields';

class Input extends Component {

    constructor(props) {
        super();
        this.state = {
            placeholder: props.placeholder,
            type: props.type,
            value: props.value,
            propertyName: props.propertyName,
            hidden: props.hidden
        }
    }

    render() {
        return (
                <input type={this.props.type} placeholder={this.props.placeholder} hidden={this.props.hidden}
                    value={this.props.value}
                    onChange={(event) => this.handleChange(this.props.propertyName, event.target, this.props.type)}/>
        )
    }

    handleChange(field, element, fieldType) {
        const value = element.value;
        this.props.updateProperty(field, value);
        this.setClassErrorInput(element, fieldType, value);

    }

    setClassErrorInput(element, fieldType, value) {
        if(!CheckField(fieldType, value)){
            element.classList.add('error-input');
            element.classList.remove('right-input');
        }
        else{
            element.classList.remove('error-input');
            element.classList.add('right-input');
        }
    }
}

const mapStateToProps = (state) => {
    return {
        subscriber: state.subscriber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProperty: (field, value) => dispatch(updateProperty(field, value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);

