import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AppMain from './AppMain';


class App extends Component {

  state = {
    friends: [
      "Dave L.",
      "David C.",
      "Matt R.",
      "Leslie S.",
      "Paul N."
    ],
    manageFriends: false,
    restaurants: [
      "Chipotle",
      "Manuel's Tavern",
      "Zaxby's",
      "HobNob"
    ],
    manageRestaurants: false,
    displayRestaurantSelection: false
  }

  toggleStateProperty = (property, value) => this.setState({[property]: value});

  selectRestaurant = () => Math.floor(Math.random() * this.state.restaurants.length);

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppMain
          state = {this.state}
          friendList = {this.state.friends}
          restaurantList = {this.state.restaurants}
          selectedRestaurant = {this.state.restaurants[this.selectRestaurant()]}
          handleToggleStateProperty = {this.toggleStateProperty}
        />
      </div>
    );
  }
}

export default App;
