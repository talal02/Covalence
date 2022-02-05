import React from 'react';

const Thought = props => {

  return(
    <div className='jumbotron mb-3 p-3 shadow-sm rounded border'>
      <h1 className='display-6'>@<u>{props.name}</u></h1>
      <p className='text-primary' style={{fontFamily : "'Supermercado One', cursive"}}>{props.ths}</p>
      <p className='m-0 p-0 text-muted'>Posted {props.posted}</p>
    </div>
  );
}

export default Thought;