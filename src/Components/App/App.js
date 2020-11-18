import React, { Component } from "react";
import "./App.css";
import Member from "../Member/Member";
import YashPic from "../../Resources/Images/Photo.JPG";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {isMobile: window.innerWidth < 992};
  }
  // var isMobile = (window.innerWidth < 992);
  // console.log();
  render(){
    console.log(window.innerWidth < 992);
    return (
      <div id="App">
        <div className="container-fluid">
          <div className="row landing">
            <div className="col" />
            <div className={`col-lg-7 my-auto text-${this.props.dark === 1 ? "light":"dark"}`}>
              <div className="row mx-auto">
                <p className="mx-auto text-center font-weight-bold display-2">Meet Our Team</p>
              </div>
              <div className="row mx-auto">
                <h5>We are very passionate DSC team and we strive for everyone to Learn and Grow together. We make sure that everybody stays together with us and Grow strong daily.</h5>
              </div>
            </div>
            <div className="col" />
          </div>
          <div className="row">
            <svg className="mx-auto" width="25" height="25">
              <circle cx="12.5" cy="12.5" r="10" style={{"fill":"none","stroke":"white","strokeWidth":window.innerWidth < 992 ?"0":"2.5px"}} />
            </svg>
          </div>
          <div className="row">
            <div className={`col-lg-6${this.state.isMobile ? "":" border-right border-light"}`}>
              <div style={{"background":"red"}}><Member
                  Name="Yash Eksambekar"
                  Team="Web Development"
                  Role="Member"
                  Description="Any text to be written or anything should come here and written over here"
                  Image={YashPic}
                  dark={this.props.dark}
                  side={this.state.isMobile ? "right":"left"}
                /></div>
              </div>
            <div className={`col-lg-6${this.state.isMobile ? "":" border-left border-light"}`}>
              <div className="mx-auto" style={{"background":"red","width":"70%","height":"80vh"}}/>
            </div>
          </div>
          <div className="row">
            <div className={`col-lg-6${this.state.isMobile ? "":" border-right border-light"}`}>
              <div className="mx-auto" style={{"background":"red","width":"70%","height":"80vh"}}/>
            </div>
            <div className={`col-lg-6${this.state.isMobile ? "":" border-left border-light"}`}>
            <div style={{"background":"red"}}><Member
                  Name="Yash Eksambekar"
                  Team="Web Development"
                  Role="Member"
                  Description="Any text to be written or anything should come here and written over here"
                  Image={YashPic}
                  dark={this.props.dark}
                  side="right"
                /></div>
            </div>
          </div>
          <div className="row">
            <div className={`col-lg-6${this.state.isMobile ? "":" border-right border-light"}`}>
              <div style={{"background":"red"}}><Member
                  Name="Yash Eksambekar"
                  Team="Web Development"
                  Role="Member"
                  Description="Any text to be written or anything should come here and written over here"
                  Image={YashPic}
                  dark={this.props.dark}
                  side={this.state.isMobile ? "right":"left"}
                /></div>
              </div>
            <div className={`col-lg-6${this.state.isMobile ? "":" border-left border-light"}`}>
              <div className="mx-auto" style={{"background":"red","width":"70%","height":"80vh"}}/>
            </div>
          </div>
          <div className="row">
            <div className={`col-lg-6${this.state.isMobile ? "":" border-right border-light"}`}>
              <div className="mx-auto" style={{"background":"red","width":"70%","height":"80vh"}}/>
            </div>
            <div className={`col-lg-6${this.state.isMobile ? "":" border-left border-light"}`}>
            <div style={{"background":"red"}}><Member
                  Name="Yash Eksambekar"
                  Team="Web Development"
                  Role="Member"
                  Description="Any text to be written or anything should come here and written over here"
                  Image={YashPic}
                  dark={this.props.dark}
                  side="right"
                /></div>
            </div>
          </div>
          <div className="row">
            <div className={`col-lg-6${this.state.isMobile ? "":" border-right border-light"}`}>
              <div style={{"background":"red"}}><Member
                  Name="Yash Eksambekar"
                  Team="Web Development"
                  Role="Member"
                  Description="Any text to be written or anything should come here and written over here"
                  Image={YashPic}
                  dark={this.props.dark}
                  side={this.state.isMobile ? "right":"left"}
                /></div>
              </div>
            <div className={`col-lg-6${this.state.isMobile ? "":" border-left border-light"}`}>
              <div className="mx-auto" style={{"background":"red","width":"70%","height":"80vh"}}/>
            </div>
          </div>
          <div className="row">
            <svg className="mx-auto" width="25" height="25">
            <circle cx="12.5" cy="12.5" r="10" style={{"fill":"none","stroke":"white","strokeWidth":window.innerWidth < 992 ?"0":"2.5px"}} />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
