import React from 'react';

import Restaurant from './Restaurant';

const RestaurantList = props =>
      <div>
        <form>
          <ul>
            {
              props.restaurantList.map((restaurant, index) =>
                <Restaurant
                    restaurant = {restaurant}
                />)
            }
          </ul>
          <button>Add New</button>
        </form>
      </div>

export default RestaurantList;