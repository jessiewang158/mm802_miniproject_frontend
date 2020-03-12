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


import Card from "components/Card/Card.jsx";
import {
  dataPie1,
    dataPie2,
    dataPie3,
  legendPie,
} from "variables/Variables.jsx";

class Typography extends Component {
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



  handleTextFieldChange(event) {
    let location = event.target.value;
    let text = location;
    console.log(location);

    if (text == 2) {
      this.dataselect = dataPie1;
    } else if (text == 3) {
      this.dataselect = dataPie2;
    } else if (text ==4) {
      this.dataselect = dataPie3;
    } ;

    console.log(this.dataselect);

    this.forceUpdate();
    //this.setState();
  }

  findSelect() {
    return this.dataselect;
    console.log(this.dataselect);
  }


  render() {



    return (
        <div className="content">
          <Grid fluid>
            <Row>
              <Col lg={3} sm={6}>

              </Col>
              <Col lg={3} sm={6}>

              </Col>
              <Col lg={3} sm={6}>

              </Col>
              <Col lg={3} sm={6}>

              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <Card
                statsIcon=""
                title="What is the distribution of movies from 2001 to 2010?"
                category=""
                stats=""
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <div className="Dropdown">

                      <Nav pullLeft>
                        <select
                            eventKey={2}
                            title="Year Selection"
                            id="basic-dropdown"

                            onChange = {event =>this.handleTextFieldChange(event,'location')}

                        >
                          <option value="1">No Selection </option>
                          <option value="2">2001</option>
                          <option value="3">2002</option>
                          <option value="4">2003</option>

                        </select>
                      </Nav>
                    </div>

                    <ChartistGraph data={this.dataselect} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
              </Col>
              <Col md={4}>

              </Col>
            </Row>

            <Row>
              <Col md={6}>

              </Col>

              <Col md={6}>

              </Col>
            </Row>
          </Grid>
        </div>
    );
  }



}



export default Typography;
