import React from "react";
import CharacterItem from "../components/CharacterItem";
import axios from "axios";

class FetchPage extends React.Component {
  state = {
    personajes: []
  };
  componentDidMount() {
    console.log("componentDidMount FetchPAGE");
    this.fetchApi();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate FetchPAGE");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount fetchPage");
  }
  fetchApi = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      const personajes = res.data.results;
      this.setState({
        personajes: personajes
      });
    });
  };
  render() {
    return (
      <div className="container">
        <div className="App">
          <ul className="row">
            <li className="col-6 col-md-3">
              {this.state.personajes.map(personaje => (
                <CharacterItem personaje={personaje} key={personaje.id} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FetchPage;
