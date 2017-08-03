// @flow
import React, { Component } from 'react';
import electron from 'electron';
import jquery from 'jquery';
// import PropTypes from 'prop-types';
//  import { Link } from 'react-router-dom';
//  import styles from './LoginForm.css';

const app = electron.remote;
const dialog = app.dialog;
const fs = require('fs');

class SelectWbtStatement extends Component {
  props: {
    onTransactionDate: () => void
  };
  state: {
    wbtStatementFile: string,
    transactionDate: string
  }
  constructor() {
    super();
    this.state = {
      wbtStatementFile: 'wbtStatementFile',
      transactionDate: 'transactionDate'
    };
  }
  readWbtStatementIntojQuery = () => {
    console.log('entering readWbtStatementIntojQuery');
    const filename = this.state.wbtStatementFile;
    console.log('filename is==> ' + filename);
    fs.readFile(filename, (err, html) => {
      let $html;
      if (err) {
        // handle error
        console.log('inside readWbtStatementIntojQuery fs.readFile has an error');
      } else {
        console.log('entering else of fs.readFile   readWbtStatementIntojQuery');
        // console.log(html);
        $html = jquery(html.toString());
        console.log($html);
        // now $html is a jQuery object
        // const evenElements = $html.class('even');
        //const oddElements = $html.class('odd');
        //const transactionDateVar = oddElements[0].class('date').text();
        const transactionDateVar = '2017/08/03';
        this.setState({ transactionDate: transactionDateVar });
        console.log('inside readWbtStatementIntojQuery transactionDateVar=  ' + transactionDateVar);
      }
    });
    console.log('leaving readWbtStatementIntojQuery');
  }
  selectWbtStatementFile = () => {
    console.log('called selectWbtStatementFile');
    const fileNames = dialog.showOpenDialog();
    if (fileNames === undefined) {
      console.log('inside selectWbtStatementFile No file selected');
      this.setState({ wbtStatementFile: '' });
    } else {
      // console.log('going to set the filename and boolean' + fileNames);
      this.setState({ wbtStatementFile: fileNames[0] });
    }
    console.log('end of selectWbtStatementFile');
  }
  handleTransactionDate = (event) => {
    const target = event.target;
    console.log(target.name);
    console.log(target.value);
    if (target.name === 'transactionDateTextBox') {
      this.setState({ transactionDate: target.value });
    }
    this.props.onTransactionDate(this.state.transactionDate);
  }
  render() {
    /*
    if (this.state.jobFilepathSelected && this.state.metaDataFolderSelected) {
      $('#sendButton').removeAttr('disabled');
    } else {
      $('#sendButton').attr('disabled', 'true');
    }
    */
    let transDate;
    if (this.state.wbtStatementFile === 'wbtStatementFile') {
      transDate = 'No file selected Gumbo.';
    } else {
      transDate = '2017/08/03';
    }

    return (
      <div className="panel panel-primary">
        <div className="panel-heading apt-addheading">Select WBT Statement</div>
        <div className="panel-body">
          <form className="form" onSubmit={this.localHandleSend}>
            <div className="form-group">
              <label htmlFor="wbtStatementFile">WBT Statement</label>
              <div className="form-text" id="wbtStatementFileId" >{this.state.wbtStatementFile}</div>
              <div className="col-sm-offset-3 col-sm-9">
                <div className="pull-right">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.selectWbtStatementFile}
                  >Select WBT Statement</button>&nbsp;
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label" htmlFor="transactionDate">transactionDate</label>
              <div className="form-text" id="transactionDate" placeholder="transactionDate" >{transDate}</div>
              <div className="col-sm-offset-3 col-sm-9">
                <div className="pull-right">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.readWbtStatementIntojQuery}
                  >Process WBT Statement</button>&nbsp;
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SelectWbtStatement;
