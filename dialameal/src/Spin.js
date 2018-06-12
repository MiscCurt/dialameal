import React from 'react';

const Spin = props =>
      <div>
        <h3>Click to Spin:</h3>
        <button onClick = {(property, value) => props.handleToggleStateProperty("displayRestaurantSelection", true)}>Spin</button>
      </div>

export default Spin;