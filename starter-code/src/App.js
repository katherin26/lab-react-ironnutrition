import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./foodbox/FoodBox";
import SearchBar from "./searchbar/SearchBar";
import Form from "./form/Form";
import TodaysFoods from "./addbutton/TodaysFoods";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showCreateFood: false,
      cartItems: [],
    };
  }

  handleSearch(foodname) {
    this.setState((state) => {
      return {
        foods: state.foods.filter((obj) => {
          if (obj.name === foodname) return true;
          else return false;
        }),
      };
    });
  }

  handleCreate(food) {
    this.setState((state) => {
      return {
        foods: state.foods.concat(food),
        showCreateFood: false,
      };
    });
  }

  addToCart(food, quantity) {
    console.log(`Added ${quantity} ${food.name}`);

    const foodIndex = this.state.cartItems.findIndex(
      (item) => item.food.name === food.name
    );

    console.log("Found index ", foodIndex);

    // If food has not been added to the cart, add it for the first time
    if (foodIndex === -1) {
      this.setState((prevState) => {
        return { cartItems: prevState.cartItems.concat({ food, quantity }) };
      });
    } else {
      this.setState((prevState) => {
        prevState.cartItems[foodIndex].quantity = quantity;
        return { cartItems: prevState.cartItems };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IRON NUTRITION</h1>
        </header>
        <div className="columns">
          <div className="column is-two-thirds">
            <SearchBar handleSearch={this.handleSearch.bind(this)} />
            <button
              className="button is-info"
              onClick={() => this.setState({ showCreateFood: true })}
            >
              Add Food
            </button>
            {this.state.showCreateFood ? (
              <Form handleCreate={this.handleCreate.bind(this)} />
            ) : (
              ""
            )}
            {this.state.foods.map((food, index) => (
              <FoodBox
                food={food}
                key={index}
                addToCartHandler={this.addToCart.bind(this)}
              />
            ))}
          </div>
          <div className="column">
            <TodaysFoods cartItems={this.state.cartItems}></TodaysFoods>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
