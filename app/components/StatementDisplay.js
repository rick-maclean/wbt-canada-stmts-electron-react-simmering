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
            <table>
              <tbody>
                <tr className="odd">
                  <td className="date">2016/12/21</td>
                  <td className="currency">$100.00</td>
                  <td className="description">(K21755) Gay Dykstra<br/>Gay Dykstra<br/>302-7950 McLaughlin Rd<br/>Brampton ON L6Y 5V9<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1413</td>
                </tr>
                <tr className="even">
                  <td className="date">2016/12/28</td>
                  <td className="currency">$175.00</td>
                  <td className="description">(K3169) Henry &amp; Lynda Jansen<br/>Henry &amp; Lynda Jansen<br/>86 Ferncroft Dr<br/>Keswick ON L4P 4G7<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1429</td>
                </tr>
                <tr className="odd">
                  <td className="date">2016/12/28</td>
                  <td className="currency">$2,000.00</td>
                  <td className="description">(K9873) Kevin &amp; Beatrice Tiemstra<br/>Kevin &amp; Beatrice Tiemstra<br/>61408 Range Rd 32<br/>County of Barrhead AB T0G 1R2<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1429</td>
                </tr>
                <tr className="even">
                  <td className="date">2016/12/28</td>
                  <td className="currency">$550.00</td>
                  <td className="description">(K8078) Bruce D &amp; Janice M Hynds<br/>Bruce D &amp; Janice M Hynds<br/>28 Bridgewater Dr<br/>Richmond Hill ON L4E 3N4<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1429</td>
                </tr>
                <tr className="odd">
                  <td className="date">2016/12/28</td>
                  <td className="currency">$111.00</td>
                  <td className="description">(K38535) Brian R &amp; Madeline J Haye<br/>Brian R &amp; Madeline J Hayes<br/>96 Antioch Drive<br/>Etobicoke ON M9B 5V4<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1429</td>
                </tr>
                <tr className="even">
                  <td className="date">2016/12/28</td>
                  <td className="currency">$575.60</td>
                  <td className="description">(K4558) Rehoboth United Reformed <br/>NE<br/>Rehoboth United Reformed Church<br/>77 Glancaster Rd<br/>Ancaster ON L9G 3K9<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1429</td>
                </tr>
                <tr className="odd">
                  <td className="date">2016/12/30</td>
                  <td className="currency">$650.00</td>
                  <td className="description">(K7483) Paul &amp; June Vannatto<br/>Paul &amp; June Vannatto<br/>21 Roy St<br/>Wallaceburg ON N8A 1B3<br/>CANADA</td>
                  <td className="method">CC</td>
                  <td className="account">3-5017</td>
                  <td className="reference">KUTOA-1440</td>
                </tr>
                <tr className="even">
                  <td className="date">2016/12/31</td>
                  <td className="currency">$311.75</td>
                  <td className="description">(K9052) Hebron Christian Reformed<br/>Hebron Christian Reformed Church<br/>Attn Treasurer<br/>431 Albert St<br/>Renfrew ON K7V 1V8<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1445</td>
                </tr>
                <tr className="odd">
                  <td className="date">2016/12/31</td>
                  <td className="currency">$468.00</td>
                  <td className="description">(K26020) Athens Christian Reformed<br/>Athens Christian Reformed Church<br/>PO Box 639<br/>Athens ON K0E 1B0<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1445</td>
                </tr>
                <tr className="even">
                  <td className="date">2016/12/31</td>
                  <td className="currency">$200.00</td>
                  <td className="description">(K6963) Flora Denbok<br/>Flora Denbok<br/>1842 Park Ave<br/>London ON N5W 2J8<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1445</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/01</td>
                  <td className="currency">$25.00</td>
                  <td className="description">(K21955) Martin &amp; Alice Kaldeway<br/>Martin &amp; Alice Kaldeway<br/>1011 Aspen Dr<br/>Brockville ON K6V 7G2<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1427</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/01</td>
                  <td className="currency">$50.00</td>
                  <td className="description">(K21384) Paul &amp; Shirley Weme<br/>Paul &amp; Shirley Weme<br/>21658 40 Ave<br/>Langley BC V2Z 1N7<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1427</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/01</td>
                  <td className="currency">$100.00</td>
                  <td className="description">(K14404) John &amp; Mildred Baptist<br/>John &amp; Mildred Baptist<br/>30 Winters Lane<br/>Seguin ON P2A 2W8<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1427</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/01</td>
                  <td className="currency">$85.00</td>
                  <td className="description">(K17446) Eldon &amp; Phyllis Lehman<br/>Eldon &amp; Phyllis Lehman<br/>21 Village Green Dr<br/>Guelph ON N1G 4X7<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1427</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/01</td>
                  <td className="currency">$60.00</td>
                  <td className="description">(K12186) Ad Goosens<br/>Ad Goosens<br/>1083 Bridlewood Dr<br/>Brockville ON K6V 7G2<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1427</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/01</td>
                  <td className="currency">$25.00</td>
                  <td className="description">(K8778) Iain &amp; Bonnie Mair<br/>Iain &amp; Bonnie Mair<br/>246-32691 Garibaldi Dr<br/>Abbotsford BC V2T 5T7<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1427</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/01</td>
                  <td className="currency">$50.00</td>
                  <td className="description">(K992) Martin and Gertie Dielema<br/>Martin and Gertie Dieleman<br/>5596 Egremont Drive<br/>R.R.#1<br/>Ilderton ON N0M 2A0<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1427</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/03</td>
                  <td className="currency">$300.00</td>
                  <td className="description">(K2910) Gem Cabinets Ltd<br/>Gem Cabinets Ltd<br/>14019 128 Ave NW<br/>Edmonton AB T5L 3H3<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1435</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/05</td>
                  <td className="currency">$50.00</td>
                  <td className="description">(K37992) Glenn &amp; Susan Friesen<br/>Helen Friesen<br/>Glenn &amp; Susan Friesen<br/>RR 2<br/>Minnedosa MB R0J 1E0<br/>CANADA</td>
                  <td className="method">CC</td>
                  <td className="account">3-5017</td>
                  <td className="reference">KUTOA-1446</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/10</td>
                  <td className="currency">$968.00</td>
                  <td className="description">(K32541) Heritage Fellowship CRC<br/>NE<br/>Heritage Fellowship CRC<br/>7900 McLaughlin Rd<br/>Brampton ON L6Y 5A7<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1464</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/10</td>
                  <td className="currency">$750.00</td>
                  <td className="description">(K16490) Faith Fellowship Baptist <br/>Faith Fellowship Baptist Church of Auror<br/>c/o 398 Old Bloomington Rd<br/>Aurora ON L4G 0M2<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1464</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/10</td>
                  <td className="currency">$621.00</td>
                  <td className="description">(K4555) Bethel Christian Reformed<br/>Bethel Christian Reformed-Brockville<br/>117 Windsor Dr<br/>PO Box 345<br/>Brockville ON K6V 5V5<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1464</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/15</td>
                  <td className="currency">$50.00</td>
                  <td className="description">(K21715) Mike &amp; Eva De Vries<br/>Mike &amp; Eva De Vries<br/>31-101 Southgate Pky<br/>St Thomas ON N5R 6L5<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1465</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/15</td>
                  <td className="currency">$30.00</td>
                  <td className="description">(K8878) Margarita Ho<br/>Margarita Ho<br/>56 Barford Rd<br/>Etobicoke ON M9W 4H4<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1465</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/15</td>
                  <td className="currency">$250.00</td>
                  <td className="description">(K21443) Southridge Fellowship Bap<br/>Southridge Fellowship Baptist Church<br/>22756 48 Ave<br/>Langley BC V2Z 2T6<br/>CANADA</td>
                  <td className="method">PAP</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1465</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/18</td>
                  <td className="currency">$1,585.00</td>
                  <td className="description">(K2518) Christian Reformed Church<br/>Christian Reformed Church<br/>of Georgetown<br/>PO Box 45 Stn Main<br/>Georgetown ON L7G 4T1<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1470</td>
                </tr>
                <tr className="odd">
                  <td className="date">2017/01/18</td>
                  <td className="currency">$1,500.00</td>
                  <td className="description">(K37822) Donald &amp; Leone Woods<br/>Donald &amp; Leone Woods<br/>14 Andrew Cres<br/>St Albert AB T8N 2V3<br/>CANADA</td>
                  <td className="method">CK</td>
                  <td className="account">3-5011</td>
                  <td className="reference">KUTOA-1470</td>
                </tr>
                <tr className="even">
                  <td className="date">2017/01/18</td>
                  <td className="currency">$260.00</td>
                  <td className="description">(K32423) David W Richards<br/>David W Richards<br/>224 The Westway<br/>Toronto ON M9R 1E8<br/>CANADA</td>
                  <td className="method">CC</td>
                  <td className="account">3-5017</td>
                  <td className="reference">KUTOA-1472</td>
                </tr>
              </tbody>
          </table>
        </form>
        </div>
      </div>
    );
  }
}

export default StatementDisplay;
