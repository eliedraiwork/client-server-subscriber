import React from 'react';
import { connect } from 'react-redux';
import './Buttons.css';
import CheckField from '../../../logic/CheckFields'

import { nextStep, previousStep, validateField } from '../../../redux/';
import PostSubscriber from '../../../logic/PostSubscriber';

class Buttons extends React.Component {
  render() {

    var nextButtonContent = (this.isPost()) ? "Submit" : "Next";
    var nextButtonPostClass = (this.isPost()) ? "post-btn" : "";

    return (
      <div className="Buttons">
        <button id="btn-previous"
          disabled={!this.checkPrevious() ? true : false}
          onClick={this.props.previousStep}
          hidden={this.props.step === 4}>
          Previous
          </button>
        <button id="btn-next"
          className={nextButtonPostClass}
          onClick={this.nextButtonOnClick}
          hidden={this.props.step === 4}>
          {nextButtonContent}
        </button>
      </div>
    );
  }

  disableNext() {
    var test = true;
    switch (this.props.step) {
      case 1:
        
        //  check first name
        if( !CheckField('text', this.props.subscriber.firstname) ){
          test = false
        }

        // check lastname
        if( !CheckField('text', this.props.subscriber.lastname) ){
          test = false;
        }

        // check email
        if( !CheckField('email', this.props.subscriber.email) ){
          test = false;
        }

        //  check phone
        if( !CheckField('phone', this.props.subscriber.phone) ){
          test = false;
        }
        return test;

      case 2:
        if( !CheckField("text", this.props.subscriber.country)) {
          test = false;
        }
        
        return test;

      case 3:
        //  check iban
        if( !CheckField('number', this.props.subscriber.iban) ){
          test = false
        }

        // check lastname
        if( !CheckField('number', this.props.subscriber.bic) ){
          test = false;
        }
        return test;
      case 4:
        return false;
      default:
        return true;
    }
  }

  nextButtonOnClick = () => {
    if (this.checkNext()) {
      this.props.nextStep();
      if (this.isPost()) {
        this.postSubscriber();
      }
    }
    else {
      
    }

  }

  isPost = () => {
    return this.props.step >= 3;
  }

  checkNext() {
    var test = true;
    switch (this.props.step) {
      case 1:
        
        //  check first name
        if( !CheckField('text', this.props.subscriber.firstname) ){
          this.props.validateField('firstname', false);
          test = false
        }

        // check lastname
        if( !CheckField('text', this.props.subscriber.lastname) ){
          this.props.validateField('lastname', false);
          test = false;
        }

        // check email
        if( !CheckField('email', this.props.subscriber.email) ){
          this.props.validateField('email', false);
          test = false;
        }

        //  check phone
        if( !CheckField('phone', this.props.subscriber.phone) ){
          this.props.validateField('phone', false);
          test = false;
        }
        return test;

      case 2:
        if( !CheckField("text", this.props.subscriber.country)) {
          this.props.validateField('country', false);
          test = false;
        }
        
        return test;

      case 3:
        //  check iban
        if( !CheckField('number', this.props.subscriber.iban) ){
          this.props.validateField('iban', false);
          test = false
        }

        // check lastname
        if( !CheckField('number', this.props.subscriber.bic) ){
          this.props.validateField('bic', false);
          test = false;
        }
        return test;
      case 4:
        return false;
      default:
        return true;
    }
  }

  checkPrevious() {
    switch (this.props.step) {
      case 1:
        return false;
      default:
        return true
    }
  }

  postSubscriber = () => {
    PostSubscriber(this.props.subscriber)
  }
}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    subscriber: state.subscriber,
    validate: state.validate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => dispatch(nextStep()),
    previousStep: () => dispatch(previousStep()),
    validateField: (field, value) => dispatch( validateField(field, value) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

