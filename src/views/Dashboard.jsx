/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import {Grid, Row, Col, Nav, NavDropdown, NavItem, MenuItem, Dropdown} from "react-bootstrap";




import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales1,
    dataSales2,
    dataSales3,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import Maps from "./Maps";

class Dashboard extends Component {

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }


  /*constructor (props){
    super(props)

    //this.state = {}
    //this.handleChange = this.handleChange.bind(this);
    this.dataselect = dataSales1;
  }*/

handleTextFieldChange(event) {
  let location = event.target.value;
  let text = location;
  console.log(location);

  if (text == 1) {
      this.dataselect = null;
    } else if (text == 2) {
      this.dataselect = dataSales1;
    } else if (text ==3) {
      this.dataselect = dataSales2;
    } else if (text ==4) {
    this.dataselect = dataSales3;
  }
  console.log(this.dataselect);

  this.forceUpdate();
  //this.setState();
  }

findSelect() {
    return this.dataselect;
    console.log(this.dataselect);
  }


  render() {
    //var a = document.getElementById("basic-nav-dropdown-right");
    //var sel=a.options[a.selectedIndex].value;

    //var p = user.permissions;
    //console.log(p);

    //console.log(8);
    //alert(8);

    //this.chartt = new Chartist.Pie(".chart", dataSales1, optionsSales,responsiveSales);
    //this.chartt = new Chartist.Line(".chart", dataSales1, null);

    /*
  let {value}=this.state;
    alert(this.state);
    if (value ==1){

      this.dataselect = dataSales1;
    } else if (value == 2) {
      this.dataselect = dataSales2;
    } else {
      this.dataselect = dataSales3;
    }*/

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              {/*<StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />*/}
            </Col>
            <Col lg={3} sm={6}>
              {/*<StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />*/}
            </Col>
            <Col lg={3} sm={6}>
              {/*<StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />*/}
            </Col>
            <Col lg={3} sm={6}>
              {/*<StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />*/}
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon=""
                id="chartHours"
                title="How many movies have been produced in the year between 2000 to 2010?"
                category=""
                stats=""
                content={

                  <div className="ct-chart">

                    <div className="Dropdown">

                      <Nav pullLeft>
                        <select
                            eventKey={2}
                            title="Movie Genre"
                            id="basic-nav-dropdown-right"
                            //onchange = "select_change(this)"
                            onChange = {event =>this.handleTextFieldChange(event,'location')}
                            //onChange = {this.handleChange}
                            //value = {this.state.value}
                        >
                          <option value="1">No Selection</option>
                          <option value="2">Romantic</option>
                          <option value="3">Horror</option>
                          <option value="4">Comedy</option>

                        </select>

                        {/*<NavDropdown
                            eventKey={2}
                            title="Movie Genre"
                            id="basic-nav-dropdown-right"

                        >
                          <MenuItem eventKey={2.1}>Action</MenuItem>
                          <MenuItem eventKey={2.2}>Romantic</MenuItem>
                          <MenuItem eventKey={2.3}>Horror</MenuItem>
                          <MenuItem eventKey={2.4}>Comedy</MenuItem>

                        </NavDropdown>*/}
                      </Nav>

                      {/*<button
                          className="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          eventKey = {2}
                          aria-expanded="false">
                        Movie Genre
                        <span className="caret"></span>

                      </button>

                      {/*<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li class="dropdown-item" href="#">Action</li>
                        <li class="dropdown-item" href="#">Romantic</li>
                        <li class="dropdown-item" href="#">Horror</li>
                        <li class="dropdown-item" href="#">Comedy</li>

                      </ul>*/}

                      {/*<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">

                        <li role="presentation"><a role="menuitem" eventKey={2.1} tabIndex="-1" href="#">Action</a></li>

                        <li role="presentation"><a role="menuitem" eventKey={2.2} tabIndex="-1" href="#">Romantic</a></li>

                        <li role="presentation"><a role="menuitem" eventKey={2.3} tabIndex="-1" href="#">Horror</a></li>

                        <li role="presentation"><a role="menuitem" eventKey={2.4} tabIndex="-1" href="#">Comedy</a></li>

                      </ul>*/}

                    </div>


                    <ChartistGraph
                        data={this.dataselect}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />

                  </div>

                }



              />
            </Col>
            <Col md={4}>
              {/*<Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />*/}
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              {/*<Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />*/}
            </Col>

            <Col md={6}>
              {/*<Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />*/}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }



}

function select_change(){
  //var x = document.getElementById("basic-nav-dropdown-right");
  //console.log(x.value);
  //console.log(9);
  alert(9);
}

export default Dashboard;
