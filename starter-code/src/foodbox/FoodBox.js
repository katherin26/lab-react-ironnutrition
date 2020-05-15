import React from "react";
import "bulma/css/bulma.css";

export default class FoodBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleAddOnClick() {
    this.props.addToCartHandler(this.props.food, this.state.quantity + 1);
    this.setState({ quantity: this.state.quantity + 1 });
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.food.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.food.name}</strong> <br />
                    <small>{this.props.food.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      value={this.state.quantity}
                      onChange={() => console.log("Bla")}
                    />
                  </div>
                  <div className="control">
                    <button
                      className="button is-info"
                      onClick={() => this.handleAddOnClick()}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
