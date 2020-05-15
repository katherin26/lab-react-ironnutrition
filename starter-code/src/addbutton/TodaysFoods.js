import React from "react";
import "bulma/css/bulma.css";

export default class TodaysFoods extends React.Component {
  render() {
    console.log(this.props.cartItems);
    const listItems = this.props.cartItems.map((item, index) => (
      <li key={index}>
        {item.food.name} Qty: {item.quantity} Calories: {item.food.calories}
      </li>
    ));

    const totalCalories = this.props.cartItems.reduce(
      (sum, item) => (sum += item.food.calories * item.quantity),
      0
    );
    const totalItems = this.props.cartItems.reduce(
      (sum, item) => (sum += item.quantity),
      0
    );

    return (
      <React.Fragment>
        <ul>{listItems}</ul>
        <p>
          Total Items: {totalItems} Total Calories: {totalCalories}
        </p>
      </React.Fragment>
    );
  }
}
