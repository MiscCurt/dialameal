import React from 'react';

const Restaurants = props =>
      <div>
        <button onClick = {(property, value) => props.handleToggleStateProperty("manageRestaurants", true)}>Restaurants</button>
      </div>

export default Restaurants;