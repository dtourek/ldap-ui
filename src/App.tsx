import React from 'react';
import users from './configs/users.json'
import {Users} from "./Modules/User/Users";

function App() {
  return (
    <div>
      <h1>Ldap users</h1>
      <Users users={users} />
    </div>
  );
}

export default App;
