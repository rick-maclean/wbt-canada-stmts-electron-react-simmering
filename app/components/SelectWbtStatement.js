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
    transactionDate: string,
    singleTransaction: string,
    transactionAmount: string,
    transDescription: string,
    tntUserIdSt: string,
    stFirstName: string,
    stLastName: string,
    stStreetAddress: string,
    stCity: string,
    stProv: string,
    stPostalCode: string,
    stCountry: string,
    transMethod: string,
    transAccount: string,
    transReference: string
  }
  constructor() {
    super();
    this.state = {
      wbtStatementFile: 'wbtStatementFile',
      transactionDate: 'transactionDate',
      singleTransaction: 'singleTransaction',
      transactionAmount: 'transactionAmount',
      transDescription: 'transDescr',
      tntUserIdSt: 'tntUserId',
      stFirstName: 'stFirstName',
      stLastName: 'stLastName',
      stStreetAddress: 'stStreetAddress',
      stCity: 'string',
      stProv: 'string',
      stPostalCode: 'string',
      stCountry: 'country',
      transMethod: 'transMethod',
      transAccount: 'transAccount',
      transReference: 'transReference'
    };
  }
  readWbtStatementIntojQuery = () => {
    console.log('entering readWbtStatementIntojQuery');
    const filename = this.state.wbtStatementFile;
    console.log('filename is==> ' + filename);
    fs.readFile(filename, (err, html) => {
      let jqueryHtml;
      if (err) {
        // handle error
        console.log('inside readWbtStatementIntojQuery fs.readFile has an error');
      } else {
        console.log('entering else of fs.readFile   readWbtStatementIntojQuery');
        // console.log(html);
        jqueryHtml = jquery(html.toString());
        console.log('jqueryHtml.className===>');
        console.log(jqueryHtml.className);
        console.log('jqueryHtml is set to ===> \n');
        console.log(jqueryHtml);
        // const evenElements = jqueryHtml.find('odd');
        // console.log('evenElements is set to ==> \n');
        // console.log(evenElements);
        const tableData = jqueryHtml[12];
        console.log('tableData.className===>');
        console.log(tableData.className);
        console.log('tableData is set to ==> \n');
        console.log(tableData);
        const evenTableEntries = tableData.getElementsByClassName('even');
        console.log('evenTableEntries are --> ');
        console.log(evenTableEntries);
        console.log('oddTableEntries are --> ');
        const oddTableEntries = tableData.getElementsByClassName('odd');
        console.log(oddTableEntries);
        const firstOddEntry = oddTableEntries[0];
        console.log('firstOddEntry is: ');
        console.log(firstOddEntry);
        this.setState({ singleTransaction: firstOddEntry });
        const dateDt = firstOddEntry.getElementsByClassName('date')[0];
        console.log('dateDt is: ');
        console.log(dateDt);
        const dateText = dateDt.innerText;
        console.log('dateText is: ');
        console.log(dateText);
        this.setState({ transactionDate: dateText });
        const amountDt = firstOddEntry.getElementsByClassName('currency')[0].innerText;
        this.setState({ transactionAmount: amountDt });
        const transDescr = firstOddEntry.getElementsByClassName('description')[0].innerHTML;
        this.setState({ transDescription: transDescr });
        const decscriptionSplit = transDescr.split('<br>');
        for (let i = 0, len = decscriptionSplit.length; i < len; i++) {
          console.log(decscriptionSplit[i]);
        }
        // tntUserId
        let tntUserId = decscriptionSplit[0];
        console.log(tntUserId);
        let indx = tntUserId.indexOf(')');
        tntUserId = tntUserId.substring(1, indx);
        console.log(tntUserId);
        this.setState({ tntUserIdSt: tntUserId });
        // tntName
        const tntName = decscriptionSplit[1];
        console.log(tntName);
        indx = tntName.lastIndexOf(' ');
        const tntFirstName = tntName.substring(0, indx);
        this.setState({ stFirstName: tntFirstName });
        console.log('#' + tntFirstName +'#');
        const tntLastName = tntName.substring(indx+1, tntName.length);
        this.setState({ stLastName: tntLastName });
        console.log('#' + tntLastName +'#');
        // tntStreet
        const tntStreet = decscriptionSplit[2];
        console.log(tntStreet);
        this.setState({ stStreetAddress: tntStreet });
        // tntCityStZip
        const tntCityStZip = decscriptionSplit[3];
        console.log(tntCityStZip);
        const tntCityStZipSplit = tntCityStZip.split(' ');
        const cityStZpLength = tntCityStZipSplit.length;
        const postalCode = tntCityStZipSplit[cityStZpLength-2] + ' ' + tntCityStZipSplit[cityStZpLength-1];
        console.log(postalCode);
        this.setState({ stPostalCode: postalCode });
        const province = tntCityStZipSplit[cityStZpLength-3];
        console.log(province);
        this.setState({ stProv: province });
        const otherLength = postalCode.length + province.length + 1;
        const diffLeng = tntCityStZip.length - otherLength;
        const city = tntCityStZip.substring(0, diffLeng)
        console.log(city);
        this.setState({ stCity: city });
        // tntCountry
        const tntCountry = decscriptionSplit[4];
        console.log(tntCountry);
        this.setState({ stCountry: tntCountry });

        const methodDt = firstOddEntry.getElementsByClassName('method')[0].innerHTML;
        this.setState({ transMethod: methodDt });
        const accountDt = firstOddEntry.getElementsByClassName('account')[0].innerHTML;
        this.setState({ transAccount: accountDt });
        const referenceDt = firstOddEntry.getElementsByClassName('reference')[0].innerHTML;
        this.setState({ transReference: referenceDt });
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
    let transactionAmount;
    let transDescr;
    let transMethod = 'blah';
    let transAccount = 'blah';
    let transReference = 'blah';
    let tntUserId = 'blah';
    let tntFirstName = 'blah';
    let tntLastName = 'blah';
    let tntStreet = 'blahla';
    let tntCity = 'blahla';
    let tntProv = 'blahla';
    let tntPostalCode = 'blahla';
    let tntCountry ='blalaCountry'
    if (this.state.wbtStatementFile === 'wbtStatementFile') {
      transDate = 'No file selected Gumbo.';
      transactionAmount = 'No amount yet';
    } else {
      transDate = this.state.transactionDate;
      transactionAmount = this.state.transactionAmount;
      transDescr = this.state.transDescription;
      transMethod = this.state.transMethod;
      transAccount = this.state.transAccount;
      transReference = this.state.transReference;
      tntUserId = this.state.tntUserIdSt;
      tntFirstName = this.state.stFirstName;
      tntLastName = this.state.stLastName;
      tntStreet = this.state.stStreetAddress;
      tntCity = this.state.stCity;
      tntProv = this.state.stProv;
      tntPostalCode = this.state.stPostalCode;
      tntCountry = this.state.stCountry;

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
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="transactionDate">Amount</label>
              <div className="form-text" id="transactionAmount" placeholder="transactionAmount" >{transactionAmount}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="transactionDate">Description</label>
              <div className="form-text" id="transDescr" placeholder="transDescr" >{transDescr}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntUserId">tntUserId</label>
              <div className="form-text" id="tntUserId" placeholder="tntUserId" >{tntUserId}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntFirstName">tntFirstName</label>
              <div className="form-text" id="tntFirstName" placeholder="tntFirstName" >{tntFirstName}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntLastName">tntLastName</label>
              <div className="form-text" id="tntLastName" placeholder="tntLastName" >{tntLastName}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntStreet">tntStreet</label>
              <div className="form-text" id="tntStreet" placeholder="tntStreet" >{tntStreet}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntCity">tntCity</label>
              <div className="form-text" id="tntCity" placeholder="tntCity" >{tntCity}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntProv">tntProv</label>
              <div className="form-text" id="tntProv" placeholder="tntProv" >{tntProv}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntPostalCode">tntPostalCode</label>
              <div className="form-text" id="tntPostalCode" placeholder="tntPostalCode" >{tntPostalCode}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="tntCountry">tntCountry</label>
              <div className="form-text" id="tntCountry" placeholder="tntCountry" >{tntCountry}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="transactionDate">method</label>
              <div className="form-text" id="transDescr" placeholder="transDescr" >{transMethod}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="transactionDate">account Member</label>
              <div className="form-text" id="transDescr" placeholder="transDescr" >{transAccount}</div>
              <br></br>
              <label className="col-sm-3 control-label" htmlFor="transactionDate">reference</label>
              <div className="form-text" id="transDescr" placeholder="transDescr" >{transReference}</div>
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
