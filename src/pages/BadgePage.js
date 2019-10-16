import React from "react";
import "./styles/BadgePage.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
class BadgePage extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: ""
    }
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValue={this.state.form}
              />
            </div>
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter="sasasamaes"
                jobTitle="Backend"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgePage;
