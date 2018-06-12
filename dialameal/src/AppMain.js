import React from 'react';

import Friends from './Friends';
import FriendsList from './FriendsList';
import Restaurants from './Restaurants';
import RestaurantList from './RestaurantList';
import Spin from './Spin';
import Selection from './Selection';


const AppMain = props =>
      <div className="main">
        <Friends
          handleToggleStateProperty = {props.handleToggleStateProperty}
        />
        <Restaurants
          handleToggleStateProperty = {props.handleToggleStateProperty}
        />
        {!props.state.displayRestaurantSelection  &&  !props.state.manageFriends && !props.state.manageRestaurants && 
          <Spin
            handleToggleStateProperty = {props.handleToggleStateProperty}
          />
        }
        {props.state.displayRestaurantSelection && 
          <Selection
            selectedRestaurant = {props.selectedRestaurant}
          />
        }
        {props.state.manageFriends && 
          <FriendsList
            friendList = {props.friendList}
          />
        }
        {props.state.manageRestaurants && 
          <RestaurantList
            restaurantList = {props.restaurantList}
          />
        }
      </div>

export default AppMain;