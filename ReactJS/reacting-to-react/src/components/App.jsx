import React, { useState, useEffect } from 'react';
import Greeter from './Greeter';

const App = () => {

  const [username, setUsername] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);

  if(!loaded) {
    return (
      <div>
        <Greeter phrase='Website' name='Loading..!' />
        <button className='btn btn-primary m-5' onClick={() => setLoaded(true)}>Load Website</button>
      </div>
    );
  }

  return(
    <div>
      <Greeter 
        phrase='Hello There'
        name='Talal'
      />
      <Greeter 
        phrase='Yo'
        name='Ahmed'
      />
      <Greeter 
        phrase='Whats Up'
        name='World'
      />
      <input className='form-control m-5 w-25' value={username} onChange={e => setUsername(e.target.value)} />
      <p className='m-5 h6'>You are logging in as: <span className='display-5 text-primary'>{username}</span></p>
    </div>
  );
}

export default App;