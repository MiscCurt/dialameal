import React from 'react';

const Friend = props =>
    <li>
        <label>{props.friend}
        <input type="checkbox"></input>
        </label>
    </li>

export default Friend;