import React from 'react';

const Selection = props =>
      <div>
        <h3>Your Restaurant Selection:</h3>
        <p>{props.selectedRestaurant}</p>
        <button>Decline</button> <button>Accept</button>
      </div>

export default Selection;