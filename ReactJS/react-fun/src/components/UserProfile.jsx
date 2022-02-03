import React from 'react';

// props are immutable


const UserProfile = props => {
  let role = '';

  if (props.admin) {
    role = 'admin';
  } else {
    role = 'guest';
  }

  return (
    <div className={'text-center'}>
      <span className="badge bg-secondary">{role}</span>
      <h1>My name is {props.name} </h1>
      <br></br>
      <h1> My favourite show is {props.favShow}</h1>
    </div>
  );
}

export default UserProfile;