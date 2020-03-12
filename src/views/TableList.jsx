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
import ReactDOM from "react-dom";
import country from "world-map-country-shapes";
import Taiwan from "@svg-maps/taiwan.main";
//import world from "@svg-maps/world"
import{RadioSVGMap} from "react-svg-map";
import "react-svg-map/lib/index.css";
import svgPanZoom from "svg-pan-zoom"
import svgMap from "svgmap";
import { Grid, Row, Col, table } from "react-bootstrap";


import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

var global_selected;

class TableList extends Component {
state = {
    selectedCountries: {}
};

    toggleCountry = country => {
        global_selected = country.id;
        const {selectedCountries} = this.state;
        this.setState({
            selectedCountries: {
                //...selectedCountries,
                [country.id]: !selectedCountries[country.id],

            }
        });
    };

constructor(props) {
    super(props);
}


  render() {
     /* new svgMap({
          targetElementID: 'svgMap',
          data: {
              data: {
                  gdp: {
                      name: 'GDP per capita',
                      format: '{0} USD',
                      thousandSeparator: ',',
                      thresholdMax: 50000,
                      thresholdMin: 1000
                  },
                  change: {
                      name: 'Change to year before',
                      format: '{0} %'
                  }
              },
              applyData: 'gdp',
              values: {
                  AF: {gdp: 587, change: 4.73},
                  AL: {gdp: 4583, change: 11.09},
                  DZ: {gdp: 4293, change: 10.01}
                  // ...
              }
          }
      });*/
      const { selectedCountries } = this.state;

      const mapCountries = country.map(country => (
          <path
              key={country.id}
              d={country.shape}
              style={{
                  fill: selectedCountries[country.id] ? "tomato" : "#eee",
                  cursor: "pointer",
                  stroke: "#ccc"
              }}
              onClick={() => this.toggleCountry(country)}

          />

      ));


      console.log(global_selected);
      if (global_selected == "US") {
          this.a = "United States";
          this.b = "1234"
      }else if (global_selected =="CA"){
          this.a = "Canada";
          this.b = "CA"
      }else if (global_selected =="CN"){
          this.a = "China";
          this.b = "CN"
      }else if (global_selected =="GB"){
          this.a = "United Kingdom";
          this.b = "GB"
      }else if (global_selected =="JP"){
          this.a = "Japan";
          this.b = "JP"
      }else if (global_selected =="IN"){
          this.a = "India";
          this.b = "IN"
      }else if (global_selected =="FR"){
          this.a = "France";
          this.b = "FR"
      }else if (global_selected =="KR"){
          this.a = "South Korea";
          this.b = "KR"
      }else if (global_selected =="DE"){
          this.a = "Germany";
          this.b = "DE"
      }else if (global_selected =="AU"){
          this.a = "Australia";
          this.b = "AU"
      }else if (global_selected =="MX"){
          this.a = "Mexico";
          this.b = "MX"
      } else {
          this.a = "Unavailable";
          this.b = "Unavailable"

      }
    return (


        <div className="content">
        <Grid fluid>
          <Row>
            <Col md={10}>

                <Card

                    statsIcon=""
                    id="chartHours"
                    title="How many movies have been produced by each country between 2000 to 2010?"
                    category=""
                    stats=""

                    content={

                        <div className = "Map">
                            <table style={{
                                background:" ",
                                color:'#999999',
                                fontSize:8,
                                paddingLeft:16,

                            }}>
                                <tbody>
                                <td width="8"/>
                                <td>
                                    <p>Country: {this.a}</p>
                                    <p>Total Movie: {this.b}</p>
                                </td>
                                </tbody>
                            </table>
                            {/*<div className= "block_info">
                                Country: {this.a}
                            </div>*/}
                            {/*<div className= "block_info">
                                Total Movie: {this.b}
                            </div>*/}
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="400"
                            width="800"
                            viewBox="0 0 2000 1001"
                        >
                            {mapCountries}

                        </svg>

                            {/*<RadioSVGMap map={Taiwan}/>
                        <div id="svgMap"></div>*/}


                       </div>
                    }
                />
            </Col>


          </Row>
        </Grid>
      </div>

    )
  }
}
//ReactDOM.render(<TableList />, document.getElementById("root"));

export default TableList;
