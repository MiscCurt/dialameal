import React from 'react';

import Friend from './Friend';

const FriendsList = props =>
      <div>
        <form>
          <ul>
            {
              props.friendList.map((friend, index) =>
                <Friend
                  friend = {friend}
                />)
            }
          </ul>
          <button>Add New</button>
        </form>
      </div>

export default FriendsList;