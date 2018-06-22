import React, {Component} from 'react';
import Dish from './Dish';

class AllDishes extends Component {
    render(){
        return (
            <div>
            <h2>AllDishes</h2>
            <Dish/>
            </div>
        );
    }
}

export default AllDishes;