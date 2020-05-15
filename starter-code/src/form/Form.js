import React from "react";
import "bulma/css/bulma.css";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
    };
  }

  handleSubmitButton() {
    this.props.handleCreate(this.state);
  }

  render() {
    return (
      <div className="columns">
        <div
          className="column is-half
is-offset-one-quarter "
        >
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Add the name of the food"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Add the name of the food"
                value={this.state.calories}
                onChange={(e) => this.setState({ calories: e.target.value })}
              />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                onClick={(e) => this.handleSubmitButton()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
