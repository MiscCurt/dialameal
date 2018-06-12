import React from 'react';

const Friends = props =>
      <div>
        <button onClick = {(property, value) => props.handleToggleStateProperty("manageFriends", true)}>Friends</button>
      </div>

export default Friends;