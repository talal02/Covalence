import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Films from '../pages/Films';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Film from '../pages/Film';
import User from '../pages/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/films' element={<Films />} />
        <Route exact path='/films/:id' element={<Film />} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/users/:id' element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;