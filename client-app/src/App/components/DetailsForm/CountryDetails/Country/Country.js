import React from 'react';
import './Country.css';

class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }

    render() {

        return (

            <div className={this.state.selected?"Country selected":"Country"}>
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
}

export default Country;
