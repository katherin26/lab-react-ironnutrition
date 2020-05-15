import React from "react";
import "bulma/css/bulma.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputValueChange(event) {
    console.log(`escribiste algo ${event.target.value}`);
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    console.log("You submited one ingredient" + this.state.inputValue);
    this.props.handleSearch(this.state.inputValue);
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Find the ingredient"
                onChange={(e) => this.handleInputValueChange(e)}
              />
            </p>
            <p className="control">
              <button
                className="button is-info"
                onClick={(e) => this.handleSubmit(e)}
              >
                Search
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
