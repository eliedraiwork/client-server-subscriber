import React from 'react';
import { connect } from 'react-redux';
import './ClientDetails.css';
import { updateProperty, makeBusiness, makePersonal } from '../../../../redux/';
import CheckField from '../../../../logic/CheckFields';

import Input from '../Input/Input';

class ClientDetails extends React.Component {
    render() {
        return (

            <div className="ClientDetails">

                <div className="nav">

                    <p 
                        className={!(this.props.isBusiness)? "active" : ""}
                        onClick={ this.props.makePersonal }> 
                        PERSONAL
                    </p>
                    <p className={(this.props.isBusiness) ? "active" : ""} 
                        onClick={ this.props.makeBusiness }> 
                        BUSINESS
                    </p>

                </div>

                <div className="client-infos">
                    <Input placeholder="First name" type="text" value={this.props.firstname} propertyName="firstname"/>
                    <Input placeholder="Last name" type="text" value={this.props.lastname} propertyName="lastname"/>
                    <Input placeholder="Email" type="email" value={this.props.email} propertyName="email"/>
                    <Input placeholder="Phone number" type="phone" value={this.props.phone} propertyName="phone"/>
                    <Input placeholder="Company name" type="text" value={this.props.companyName} propertyName="companyName" hidden={!this.props.isBusiness}/>
                </div>
            </div>
        );
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
        firstname: state.subscriber.firstname,
        lastname: state.subscriber.lastname,
        email: state.subscriber.email,
        phone: state.subscriber.phone,
        isBusiness: state.subscriber.isBusiness,
        companyName: state.subscriber.companyName,
        avoidNext: state.avoidNext
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProperty: (field, value) => dispatch(updateProperty(field, value)),
        makeBusiness: () => dispatch(makeBusiness()),
        makePersonal: () => dispatch(makePersonal()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails);
//export default ClientDetails;
