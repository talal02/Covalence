import React, { useEffect, useState } from 'react';

const App = () => {

  const [email, setEmail] = useState('');

  let handleEmailBlur = e => {
    console.log('Blur');
  }

  let handleEmailChange = e => {
    setEmail(e.target.value);
    console.log('Changed');
  }

  let handleEmailFocus = e => {
    console.log('Focus');
  }

  let handleKeyDown = e => {
    console.log('down');
  }

  let handleKeyUp = e => {
    console.log('up');
  }

  let handleKeyPress = e => {
    console.log('press');
  }

  let handleClick = e => {
    e.preventDefault();
    console.log('clicked');
  }

  return (
    <form className="form-group container row col-6 mx-auto border p-3">
      <input 
        value={email}
        onChange={handleEmailChange}
        onFocus={handleEmailFocus}
        onBlur={handleEmailBlur}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        placeholder='I have a ton of events...'
        className='form-control'
      />
      <button className='btn btn-warning mt-3' onClick={handleClick}>Submit</button>
    </form>
  );
}

export default App;