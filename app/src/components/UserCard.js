import React from 'react';

const UserCard = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.bio}</p>
    </div>
  )
}

export default UserCard;