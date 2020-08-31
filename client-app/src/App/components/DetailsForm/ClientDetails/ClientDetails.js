import React from 'react';
import { connect } from 'react-redux';
import './ClientDetails.css';
import { updateProperty, makeBusiness, makePersonal } from '../../../../redux/';

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
                    <input type="text" placeholder="First name" value={this.props.firstname} onChange={(event)=> this.handleChange('firstname', event.target.value)}/>
                    <input type="text" placeholder="Last name" value={this.props.lastname} onChange={(event)=> this.handleChange('lastname', event.target.value)}/>
                    <input type="email" placeholder="Email" value={this.props.email} onChange={(event)=> this.handleChange('email', event.target.value)}/>
                    <input type="phone" placeholder="Phone number" value={this.props.phone} onChange={(event)=> this.handleChange('phone', event.target.value)}/>
                    <input type="text" placeholder="Company name" value={this.props.companyName} onChange={(event)=> this.handleChange('companyName', event.target.value)} hidden={!this.props.isBusiness}/>
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
        firstname: state.subscriber.firstname,
        lastname: state.subscriber.lastname,
        email: state.subscriber.email,
        phone: state.subscriber.phone,
        isBusiness: state.subscriber.isBusiness,
        companyName: state.subscriber.companyName
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
