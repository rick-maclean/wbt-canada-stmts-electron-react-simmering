// @flow
import React, { Component } from 'react';
import electron from 'electron';
import appStorage from 'electron-json-storage';
// using an ES6 transpiler, like babel
// import Img from 'react-image';
// import logo from './logo.svg';
//  import { Link } from 'react-router-dom';
// import styles from './Home.css';

import jestpadded from './jest-padded-90.png';
import LoginForm from '../components/LoginForm';
import JobSpecification from '../components/JobSpecification';

const app = electron.remote;
const dialog = app.dialog;

function persistData(storageKey, jsonData) {
  console.log('inside persitComponent() and storage_key is ' + storageKey + ', and jsonData is, ' + jsonData);
  // Write
  // const appStorage = require('electron-json-storage');
  appStorage.set(storageKey, jsonData, (error) => { if (error) throw error; });
}

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      emailUsername: 'anEmail@domain.top',
      passwordStateNotUsed: 'noPasswordy',
      inputText: 'this is something',
      textInHome: 'text In Home',
      metaDataFolder: 'metaDataFolder initial state',
      metaDataFolderSelected: false
    };
  }
  handleTryText(inputText) {
    const tryText = inputText;
    console.log('in handleTryText we have inputText as=>' + inputText);
    this.setState({ inputText: tryText });
  }
  mainOnChangeTextToHome = (event) => {
    const target = event.target;
    console.log(target.name);
    console.log(target.value);
    if (target.name === 'textToHome') {
      this.setState({ textInHome: target.value });
    }
  }

  mainHandleLogin(loginCredentials) {
    console.log(loginCredentials);
    const subuserName = loginCredentials.userName;
    const subpassword = loginCredentials.password;
    console.log('subuserName is = ' + subuserName);
    console.log('subpassword is = '  + subpassword);
    this.setState({
      emailUsername: subuserName,
      password: subpassword
    }); // setState
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="App-header">
            <h2>Welcome to React</h2>
            <img src={jestpadded} className="img-thumbnail" alt="logo" />
          </div>
          <h1>Hi there we have a very simple React in Electron App</h1>
          <h3>Well what are we up to now Eric and Rick</h3>
          <LoginForm
            onTryText={(tryText) => this.handleTryText(tryText)}
            subHandleLogin={(loginCredentials) => this.mainHandleLogin(loginCredentials)}
            textToHome={this.state.textInHome}
            onChangeTextToHome={this.mainOnChangeTextToHome}
          />
          <JobSpecification
          />
        </div>
      </div>
    );
  }
}
