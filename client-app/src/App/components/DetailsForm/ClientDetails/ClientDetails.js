import React from 'react';
import { connect } from 'react-redux';
import './ClientDetails.css';
import { updateProperty, makeBusiness, makePersonal } from '../../../../redux/';
import CheckField from '../../../../logic/CheckFields';

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
                    <input  type="text" placeholder="First name" 
                        value={this.props.firstname} 
                        onChange={(event)=> this.handleChange('firstname', event.target, 'text')} 
                        onBlur={(event)=>this.setClassErrorInput(event.target, 'text', this.props.firstname)}/>

                    <input  type="text" placeholder="Last name" 
                        value={this.props.lastname} 
                        onChange={(event)=> this.handleChange('lastname', event.target, 'text')} 
                        onBlur={(event)=>this.setClassErrorInput(event.target, 'text', this.props.lastname)}/>

                    <input  type="email" placeholder="Email" 
                        value={this.props.email} 
                        onChange={(event)=> this.handleChange('email', event.target, 'email')} 
                        onBlur={(event)=>this.setClassErrorInput(event.target, 'email', this.props.email)}/>
                    <input  type="phone" placeholder="Phone number" 
                        value={this.props.phone} 
                        onChange={(event)=> this.handleChange('phone', event.target, 'phone')} 
                        onBlur={(event)=>this.setClassErrorInput(event.target, 'phone', this.props.phone)}/>
                    <input  type="text" placeholder="Company name" 
                        value={this.props.companyName} 
                        onChange={(event)=> this.handleChange('companyName', event.target, 'text')} 
                        hidden={!this.props.isBusiness} 
                        onBlur={(event)=>this.setClassErrorInput(event.target, 'text', this.props.companyName)}/>
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
