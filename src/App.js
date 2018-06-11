import React, { Component } from 'react';
import './App.css';
import SingleDish from './SingleDish';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dishes: [],
      currentDish: "",
      img: "",
    }
  }
  //This is for the input 
  onInputChange = e => {
    this.setState({ currentDish: e.target.value });
  }
  //This is for the button 
  onClick = () => {
    //Makes a copy of dishes list and keeps this pure
    let dishesCopy = this.state.dishes.slice();
    dishesCopy.push(this.state.currentDish);
    this.setState({ dishes: dishesCopy, currentDish: "" });
  }
  render() {
    let listOfDishes = this.state.dishes.map((e, i) => {
      return (
       <SingleDish dish={e} key={i}/>
      );
    });
    return (
      <div>
        <div>React Menu App</div>
        <form >
        <label>Dish:</label>
        <input value={this.state.currentDish} onChange={this.onInputChange} />
        <button onClick={this.onClick}>Add!</button>
        <br/>
        <ul>{listOfDishes}</ul>
        </form>
      </div>

    );
  }
}

export default App;
