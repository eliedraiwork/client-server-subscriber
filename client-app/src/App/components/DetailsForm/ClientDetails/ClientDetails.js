import React from 'react';
import './ClientDetails.css';

class ClientDetails extends React.Component {
    render() {
        return (

            <div className="ClientDetails">

                <div className="nav">

                    <p className="active">PERSONAL</p>
                    <p>BUSINESS</p>

                </div>

                <div className="client-infos">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="phone" placeholder="Phone number"/>
                    <input type="text" placeholder="Company name"/>
                </div>





            </div>
        );
    }
}

export default ClientDetails;
