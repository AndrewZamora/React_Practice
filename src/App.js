import React, {Component} from 'react';
import './App.css';
import SingleDish from './SingleDish';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      dishes: "fish"
    }
  }
  
  
  render() {
    const dishes = this.props.dishes;
    return (
      <div>
        <h1>React Dish App {dishes}</h1> 
        <SingleDish />
      </div>
    );
  }
}

export default App;
