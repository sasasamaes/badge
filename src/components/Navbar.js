import React from "react";
import "./styles/Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <span className="font-weight-light">DevF</span>
            <span className="font-weight-bold">SanJose</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
