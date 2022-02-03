import React from 'react';

const Test = props => {
  return(
    <div>
      <h1>Testing String {props.stringTest}</h1>
      <h1>Testing Number {props.numTest}</h1>
      <h1>Boolean Test {props.boolTest}</h1>
      <h1>Undefined Test {props.undTest}</h1>
      <h1>Null Test {props.nullTest}</h1>
    </div>
  );
}

export default Test;