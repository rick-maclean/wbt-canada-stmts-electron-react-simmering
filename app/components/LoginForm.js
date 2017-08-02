// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
//  import { Link } from 'react-router-dom';
//  import styles from './LoginForm.css';

class LoginForm extends Component {
  props: {
    onTryText: () => void,
    subHandleLogin: () => void,
    onChangeTextToHome: () => void,
    textToHome: string
  };
  state: {
    inputEmail: string,
    inputPassword: string,
    tryText: string
  }
  constructor() {
    super();
    this.state = {
      inputEmail: 'hey',
      inputPassword: 'heyhey',
      tryText: 'someText'
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    console.log(target.name);
    console.log(target.value);
    if (target.name === 'emailTextBox') {
      this.setState({ inputEmail: target.value });
    } else if (target.name === 'passwordTextBox') {
      this.setState({ inputPassword: target.value });
    }
  }
  handleTryText = (event) => {
    const target = event.target;
    console.log(target.name);
    console.log(target.value);
    if (target.name === 'tryTextBox') {
      this.setState({ tryText: target.value });
    }
    this.props.onTryText(this.state.tryText);
  }
  handleSubmit = (event) => {
    console.log('handleSubmit called');
    event.preventDefault();
    const tempLoginCredentials = {
      userName: this.state.inputEmail,
      password: this.state.inputPassword
    }; // tempLoginCredentials
    console.log(tempLoginCredentials);
    this.props.subHandleLogin(tempLoginCredentials);
  }
  render() {
    //  const { emailAddy } = this.props;
    const { textToHome } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading apt-addheading">Sign in with DBL account</div>
        <br /> <p> <i>Please enter your DBL log-in credentials.</i> </p>
        <div className="panel-body">
          <form className="form-signin form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-sm-3 control-label" htmlFor="textToHome">SampleTextToHome</label>
              <div className="col-sm-9">
                <input
                  name="textToHome"
                  type="text" className="form-control"
                  id="textToHome"
                  onChange={this.props.onChangeTextToHome}
                  value={textToHome}
                  placeholder="Text"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label" htmlFor="inputEmail">Username</label>
              <div className="col-sm-9">
                <input
                  name="emailTextBox"
                  type="email" className="form-control"
                  id="inputEmail"
                  onChange={this.handleInputChange}
                  value={this.state.inputEmail}
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label" htmlFor="inputPassword">Password</label>
              <div className="col-sm-9">
                <input
                  name="passwordTextBox"
                  type="password" className="form-control"
                  id="inputPassword"
                  onChange={this.handleInputChange}
                  value={this.state.inputPassword}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label" htmlFor="trytext">SampleTextInput</label>
              <div className="col-sm-9">
                <input
                  name="tryTextBox"
                  type="text" className="form-control"
                  id="trytext"
                  onChange={this.handleTryText}
                  value={this.state.tryText}
                  placeholder="Text"
                />
              </div>
            </div>
            <div className="checkbox">
              <label>
                  <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
/*
props: {
  onEmailChange: () => void,
  onPasswordChange: () => void,
  onTryText: () => void,
  inputPasswordup: string,
  inputEmailup: string,
  inputText: string
};

inputEmailup,
inputPasswordup,
onEmailChange,
onPasswordChange,
*/

export default LoginForm;
