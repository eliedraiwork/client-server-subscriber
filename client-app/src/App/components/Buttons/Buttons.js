import React from 'react';
import { connect } from 'react-redux';
import './Buttons.css';
import CheckField from '../../../logic/CheckFields'

import { nextStep, previousStep } from '../../../redux/';
import PostSubscriber from '../../../logic/PostSubscriber';

class Buttons extends React.Component {
  render() {

    var nextButtonContent = (this.isPost()) ? "Post" : "Next";
    var nextButtonPostClass = (this.isPost()) ? "post-btn" : "";
    var nextButtonOnClick = (this.isPost()) ? this.postSubscriber : this.props.nextStep;
    return (
      <div className="Buttons">
        <button id="btn-previous"
          disabled={!this.checkPrevious() ? true : false}
          onClick={this.props.previousStep}>
          Previous
          </button>
        <button id="btn-next"
          disabled={(!this.checkNext()) ? true : false}
          className={nextButtonPostClass}
          onClick={nextButtonOnClick}>
          {nextButtonContent}
        </button>
      </div>
    );
  }

  isPost = () => {
    return this.props.step >= 3;
  }

  checkNext() {
    var test = true;
    switch (this.props.step) {
      case 1:
        test = CheckField('text', this.props.subscriber.firstname) &&
          CheckField('text', this.props.subscriber.lastname) &&
          CheckField('email', this.props.subscriber.email) &&
          CheckField('phone', this.props.subscriber.phone);

        if (this.props.subscriber.isBusiness) {
          test = test && CheckField('text', this.props.subscriber.companyName);
        }
        return test;

      case 2:
        test = CheckField("text", this.props.subscriber.country)
        return test;

      case 3:
        test = CheckField('number', this.props.subscriber.iban) &&
          CheckField('number', this.props.subscriber.bic)
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

