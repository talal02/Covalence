import React from 'react';

const Button = props => {
  return (
    <button className={props.c} onClick={props.func}>{props.display}</button>
  );
}

export default Button;