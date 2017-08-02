// @flow
import React, { Component } from 'react';
import electron from 'electron';
import $ from 'jquery';
// import PropTypes from 'prop-types';
//  import { Link } from 'react-router-dom';
//  import styles from './LoginForm.css';

const app = electron.remote;
const dialog = app.dialog;

class StatementDisplay extends Component {

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading apt-addheading">StatementDisplay WBT</div>
        <div className="panel-body">
          <form className="form" onSubmit={this.localHandleSend}>
            <h1>Wycliffe Canada Project Statement</h1>
          </form>
        </div>
      </div>
    );
  }
}

export default StatementDisplay;
