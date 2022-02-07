import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Users = () => {

  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyapi.io/data/v1/user/${id}`, { headers: new Headers({'app-id': '62017cf5c1e31274a3ae7a82'}) })
    .then(res => res.json())
    .then(User => setUser(User))
    .catch(err => alert(err));
  },[id]);


  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [loaded]);


  if(loaded) {
    return (
      <>
        <Navbar />
        <div className="container text-center mt-5">
          <div key={user.id} className="card mb-3 shadow p-4">
            <img style={{ 'width': '150px', 'margin': '0 auto' }} src={user.picture} alt="banner" />
            <p className="text-warning display-6 mt-3 mb-0" style={{ 'fontSize' : 'xx-large', 'textTransform': 'capitalize' }}>{user.title}.</p>
            <h1 className="display-2 text-warning"> {user.firstName} {user.lastName}</h1>
            <p className="h6 display-6 mt-2 mb-4 text-secondary">Gender - {user.gender}</p>
            <p className="h6 display-6 mt-2 mb-4 text-success">Phone Number - {user.phone}</p>
            <p className="h6 display-6 mt-2 mb-4 text-info">Email - {user.email}</p>
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