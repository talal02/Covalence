import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if(users.length === 0) {
      fetch('https://dummyapi.io/data/v1/user?limit=100', { headers: new Headers({'app-id': '62017cf5c1e31274a3ae7a82'}) })
      .then(res => res.json())
      .then(allUsers => setUsers(allUsers.data))
      .catch(err => alert(err));
    }
  },[users]);


  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);


  if(loaded) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <div className="row justify-content-center">
          {
            users.map(user => {
              return(
                <div key={user.id} className="col-4">
                  <div className="card mb-3 shadow p-4">
                    <img src={user.picture} alt="banner" />
                    <p className="text-warning display-6 mt-3 mb-0" style={{ 'fontSize' : 'large', 'textTransform': 'capitalize' }}>{user.title}.</p>
                    <Link to={`/users/${user.id}`} style={{ 'textDecoration' : 'none', 'fontSize': 'x-large' }} className="display-6 text-warning"> {user.firstName} {user.lastName}</Link>
                  </div>
                </div>
              );
            })
          }
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 display-1">Loading</h1>
    </>
  );

}

export default Users;