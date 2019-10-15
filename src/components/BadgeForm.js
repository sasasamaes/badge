import React from "react";

class BadgeForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <h1>Crear Card</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValue.firstName}
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValue.lastName}
            />
          </div>
          <button type="submit">Holis</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
