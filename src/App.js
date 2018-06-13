import React, {Component} from 'react';
import './App.css';
import SingleDish from './SingleDish';

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
        <h1>React Dish App </h1> 
        <SingleDish dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;