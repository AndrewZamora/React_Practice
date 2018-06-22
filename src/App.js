import React, {Component} from 'react';
import './App.css';
import Dish from './components/Dish';
import AllDishes from './components/AllDishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: "fish"
    }
  }
  render() {
    return (
      <div>
        <h1>React Menu App </h1> 
       <AllDishes/>
      </div>
    );
  }
}

export default App;