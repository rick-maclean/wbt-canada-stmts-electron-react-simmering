// @flow
import React, { Component } from 'react';
import electron from 'electron';
import $ from 'jquery';
// import PropTypes from 'prop-types';
//  import { Link } from 'react-router-dom';
//  import styles from './LoginForm.css';

const app = electron.remote;
const dialog = app.dialog;

class SelectWbtStatement extends Component {
  state: {
    wbtStatementFile: string,
  }
  constructor() {
    super();
    this.state = {
      wbtStatementFile: 'wbtStatementFile',
    };
  }
  selectWbtStatementFile = () => {
    console.log('called selectWbtStatementFile');
    const fileNames = dialog.showOpenDialog();
    if (fileNames === undefined) {
      console.log('No file selected');
      this.setState({ wbtStatementFile: '' });
    } else {
      // console.log('going to set the filename and boolean' + fileNames);
      this.setState({ wbtStatementFile: fileNames[0] });
    }
    // NOTE put this back in when the first part is working
    // persistData('jobFilePersistKey', fileNames[0]);
    console.log('end of selectWbtStatementFile');
  }
  render() {
    /*
    if (this.state.jobFilepathSelected && this.state.metaDataFolderSelected) {
      $('#sendButton').removeAttr('disabled');
    } else {
      $('#sendButton').attr('disabled', 'true');
    }
    */
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
                  >Select WBT Statement html file</button>&nbsp;
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
