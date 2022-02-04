import React from 'react';

const Greeter = props => {
  return (
    <div className='jumbotron rounded border p-4 m-5 bg-light'>
      <h1 className='display-5'>{props.phrase}, {props.name}</h1>
    </div>
  );
}

export default Greeter;