import React, { useEffect, useState } from 'react';
import Button from './Button';

const App = () => {

  const [loadFilms, setLoadFilms] = useState(false);
  const [loadPeople, setLoadPeople] = useState(false);
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);


  useEffect(() => {
    if(loadFilms) {
      fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(allFilms => setFilms(allFilms))
      .catch(err => console.log(err));
    }
  }, [loadFilms]);

  useEffect(() => {
    if(loadPeople) {
      fetch('https://ghibliapi.herokuapp.com/people')
      .then(res => res.json())
      .then(allPeople => setPeople(allPeople))
      .catch(err => console.log(err));
    }
  }, [loadPeople]);

  const handleLoadPeople = () => {
    setLoadPeople(true);
    if(loadFilms) {
      setLoadFilms(false);
    }
  }

  const handleLoadFilms = () => {
    setLoadFilms(true);
    if(loadPeople) {
      setLoadPeople(false);
    }
  }

  if(loadFilms) {
    return(
      <div className='container text-center'>
        <Button func={handleLoadFilms}  c="btn m-3 btn-primary shadow" display="Load Films"/>
        <Button func={handleLoadPeople} c="btn m-3 btn-primary shadow" display="Load People"/>
        <div className="row justify-content-center mt-5">
          {films.map(film => {
            return (
              <div className="col-4 mt-3">
              <div className="card" key={film.id} style={{"width": "22rem"}}>
                <img className="card-img-top" src={film.image} alt='some film title page'/>
                <div className="card-body">
                  <h5 className="card-title">{film.title}</h5>
                  <p className="card-text">{film.description}</p>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if(loadPeople) {
    return(
      <div className='container text-center'>
      <Button func={handleLoadFilms}  c="btn m-3 btn-primary shadow" display="Load Films"/>
      <Button func={handleLoadPeople} c="btn m-3 btn-primary shadow" display="Load People"/>
      <div className="row justify-content-center mt-5">
        {people.map(p => {
          return (
            <div className="col-4 mt-3">
            <div className="card" key={p.id} style={{"width": "22rem"}}>
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">Gender :: {p.gender}, Age :: {p.age}</p>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </div>
    );
  }

  return (
    <div className='container text-center'>
      <Button func={handleLoadFilms}  c="btn m-3 btn-primary shadow" display="Load Films"/>
      <Button func={handleLoadPeople} c="btn m-3 btn-primary shadow" display="Load People"/>
    </div>
  );
}

export default App;