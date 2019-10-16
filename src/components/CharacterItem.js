import React from "react";
import "./styles/CharacterItem.css";

class CharacterItem extends React.Component {
  render() {
    return (
      <div
        className="CharacterCard"
        style={{
          backgroundImage: `url(${this.props.personaje.image})`
        }}
      >
        <div className="CharacterCard__name-container">
          {this.props.personaje.name}
        </div>
      </div>
    );
  }
}

export default CharacterItem;
