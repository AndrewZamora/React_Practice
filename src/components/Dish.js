import React, { Component } from "react";

class Dish extends Component {
    render(){
        return (
            <div>
                Dish
                <li>
                    {this.props.dishes}
                </li>
            </div>
        );
    }
}

export default Dish;