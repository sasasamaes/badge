import React from "react";
import "./styles/Badge.css";
import logo from "../images/devf-white.png";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logo} />
        </div>
        <div className="Badge__section-name">
          <img
            src="https://www.gravatar.com/avatar?d=identicon"
            className="Badge__avatar"
          />
          <h1>
            {this.props.firstName} <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#DevF</div>
      </div>
    );
  }
}

export default Badge;
