import React, { Component } from "react";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Footer from "../Footer/Footer";
import "./Layout.css";
import App from "../App/App";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { dark: 0 };
    this.switchDarkMode = this.switchDarkMode.bind(this);
  }

  switchDarkMode() {
    this.setState({
      dark: this.state.dark === 0 ? 1 : 0,
    });
  }

  render() {
    return (
      <div id="Layout">
        <Background repeat="3" dark={this.state.dark} />
        <Navbar dark={this.state.dark} switchDarkMode={this.switchDarkMode} />
        <App dark={this.state.dark} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
