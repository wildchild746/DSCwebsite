import React, { Component } from "react";
import "./App.css";
import AbhishekBhavsar from "../../Resources/Images/AbhishekBhavsar.jpg";
import GayatriKhedkar from "../../Resources/Images/GayatriKhedkar.jpg";
import MangeshKumar from "../../Resources/Images/MangeshKumar.jpg";
import ShreeChatane from "../../Resources/Images/ShreeChatane.jpg";
import YashEksambekar from "../../Resources/Images/YashEksambekar.jpg";
import SideImage from "../../Resources/Images/SideImage.jpg";
import MemberContainer from "../MemberContainer/MemberContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMobile: window.innerWidth < 992 };
  }
  render() {
    return (
      <div id="App">
        <div className="container-fluid">
          <div className="row landing">
            <div className="col" />
            <div
              className={`col-lg-7 my-auto text-${
                this.props.dark === 1 ? "light" : "dark"
              }`}
            >
              <div className="row mx-auto">
                <p className="mx-auto text-center font-weight-bold display-2">
                  Meet Our Team
                </p>
              </div>
              <div className="row mx-auto">
                <h5>
                  We are very passionate DSC team and we strive for everyone to
                  Learn and Grow together. We make sure that everybody stays
                  together with us and Grow strong daily.
                </h5>
              </div>
            </div>
            <div className="col" />
          </div>
          <div
            className="row overflow-hidden d-none d-lg-flex"
            id="svgContainer"
          >
            <svg className="mx-auto" width="34" height="1728">
              <circle
                cx="17"
                cy="17"
                r="14"
                style={{
                  fill: "none",
                  stroke: this.props.dark === 1 ? "white" : "#202020",
                  strokeWidth: window.innerWidth < 992 ? "0" : "6px",
                }}
              />
              <line
                x1="17"
                y1="31"
                x2="17"
                y2="1728"
                style={{
                  fill: "none",
                  stroke: this.props.dark === 1 ? "white" : "#202020",
                  strokeWidth: window.innerWidth < 992 ? "0" : "6px",
                }}
              />
            </svg>
          </div>
          <MemberContainer
            Name="Mangesh Kumar"
            Team="Web Development"
            Role="Thalaiva"
            Description="Any text to be written or anything should come here and written over here"
            ProfilePicture={MangeshKumar}
            SideImage={SideImage}
            dark={this.props.dark}
            side={this.state.isMobile ? "right" : "left"}
          />
          <MemberContainer
            Name="Abhishek Bhavsar"
            Team="Web Development"
            Role="Fullstack Developer"
            Description="Any text to be written or anything should come here and written over here"
            ProfilePicture={AbhishekBhavsar}
            SideImage={SideImage}
            dark={this.props.dark}
            side={this.state.isMobile ? "right" : "right"}
          />
          <MemberContainer
            Name="Gayatri Khedkar"
            Team="Web Development"
            Role="Fullstack Developer"
            Description="Any text to be written or anything should come here and written over here"
            ProfilePicture={GayatriKhedkar}
            SideImage={SideImage}
            dark={this.props.dark}
            side={this.state.isMobile ? "right" : "left"}
          />
          <MemberContainer
            Name="Shree Chatane"
            Team="Web Development"
            Role="Frontend Developer"
            Description="Any text to be written or anything should come here and written over here"
            ProfilePicture={ShreeChatane}
            SideImage={SideImage}
            dark={this.props.dark}
            side={this.state.isMobile ? "right" : "right"}
          />
          <MemberContainer
            Name="Yash Eksambekar"
            Team="Web Development"
            Role="Backend Developer"
            Description="Any text to be written or anything should come here and written over here"
            ProfilePicture={YashEksambekar}
            SideImage={SideImage}
            dark={this.props.dark}
            side={this.state.isMobile ? "right" : "left"}
          />
          <div className="row d-none d-lg-flex p-0 m-0">
            <svg className="mx-auto" width="34" height="34">
              <circle
                cx="17"
                cy="17"
                r="14"
                style={{
                  fill: "none",
                  stroke: this.props.dark === 1 ? "white" : "#202020",
                  strokeWidth: window.innerWidth < 992 ? "0" : "6px",
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
