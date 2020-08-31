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
                    <input type="text" placeholder="First name" value={this.props.firstname} readOnly/>
                    <input type="text" placeholder="Last name" value={this.props.lastname} readOnly/>
                    <input type="email" placeholder="Email" value={this.props.email} readOnly/>
                    <input type="phone" placeholder="Phone number" value={this.props.phone} readOnly/>
                    <input type="text" placeholder="Company name" value={this.props.companyName} hidden={!this.props.isBusiness} readOnly/>
                </div>





            </div>
        );
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
        updateProperty: () => dispatch(updateProperty()),
        makeBusiness: () => dispatch(makeBusiness()),
        makePersonal: () => dispatch(makePersonal()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetails);
//export default ClientDetails;
