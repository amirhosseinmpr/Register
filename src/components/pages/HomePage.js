import React from 'react'
import { Link } from 'react-router-dom'
import className from './Homepage.css';

export default function HomePage() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch('https://reqres.in/api/users/');
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className='App'>
      <h1>Hello ReqRes users!</h1>
      <div className='flex'>
        {users.length &&
          users.map(user => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
      <Link to='/'>
        <button className='primary-button'>Log out</button>
      </Link>
    </div>
  );
}