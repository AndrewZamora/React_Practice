import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super();
    this.state = {
      dishes: [],
      currentDish: "",
      img: ""
    }
  }
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default App;
