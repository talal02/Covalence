import React, { useState} from 'react';
import Thought from './Thought';

const App = () => {
  
  const [username, setUsername] = useState('');
  const [thought, setThought] = useState('');  
  const [names, setNames] = useState(['talal02', 'dead_programmer', 'ahmed302']);
  const [thoughts, setThoughts] = useState(['Use The Force', 'Covalence Rocks', '#100Devs']);
  const [posted, setPosted] = useState(['2018-8-3', '2020-1-15', '2021-1-28'])

  const getThoughts = () => {
    var ths = []
    for(var i = 0; i < names.length; i++) {
      ths.push(<Thought key={`though-${i}`} ths={thoughts[i]} name={names[i]} posted={posted[i]}/>);
    }
    return ths;
  }

  var container = <div className="col-6 mt-5" id='content'>{getThoughts()}</div>

  const handleChirp = () => {
    if(username !== '' && thought !== '') {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      setThoughts(prevThoughts => [...prevThoughts, thought]);
      setNames(prevNames => [...prevNames, username]);
      setPosted(prevDates => [...prevDates, date]);
      setUsername('');
      setThought('');
    }
  }


  return (
    <div className='container-fluid'>
      <div className="row justify-content-around">
        <div className="col-4 mt-5 p-3">
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="far fa-user"></i></span>
            <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" placeholder="Username" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text"><i className="fab fa-angellist"></i></span>
            <textarea className="form-control" onChange={e => setThought(e.target.value)} placeholder='Your Thoughts...' value={thought} rows="3"></textarea>
          </div>
          <button onClick={handleChirp} className='btn btn-primary shadow-lg'>Chirp It</button>
        </div>
        {container}
      </div>
    </div>
  );
}


export default App;