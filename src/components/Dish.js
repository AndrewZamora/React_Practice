import React, { Component } from "react";

const Dish = (props) => {

    return (
        <div>
            Dish
            <li>
                {props.dishes}
            </li>
        </div>

    );
}

export default Dish;