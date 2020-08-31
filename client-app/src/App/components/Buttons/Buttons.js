import React from 'react';
import { connect } from 'react-redux';
import './Buttons.css';
//import CheckField from '../../../logic/CheckFields'

import { nextStep, previousStep } from '../../../redux/';
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
          disabled={(!this.checkNext()) ? true : false}
          className={nextButtonPostClass}
          onClick={this.nextButtonOnClick}
          hidden={this.props.step === 4}>
          {nextButtonContent}
        </button>
      </div>
    );
  }

  nextButtonOnClick = () => {
    this.props.nextStep();
    if(this.isPost()){
      this.postSubscriber();
    }
  }

  isPost = () => {
    return this.props.step >= 3;
  }

  checkNext() {
    //var test = true;
    switch (this.props.step) {
      case 1:
        /*test = CheckField('text', this.props.subscriber.firstname) &&
          CheckField('text', this.props.subscriber.lastname) &&
          CheckField('email', this.props.subscriber.email) &&
          CheckField('phone', this.props.subscriber.phone);*/

        if (this.props.subscriber.isBusiness) {
          //test = test && CheckField('text', this.props.subscriber.companyName);
        }
        return true;

      case 2:
        //test = CheckField("text", this.props.subscriber.country)
        return true;

      case 3:
        /*test = CheckField('number', this.props.subscriber.iban) &&
          CheckField('number', this.props.subscriber.bic)*/
        return true;
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
    subscriber: state.subscriber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nextStep: () => dispatch(nextStep()),
    previousStep: () => dispatch(previousStep()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);

