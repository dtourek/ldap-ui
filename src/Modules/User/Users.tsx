import React from 'react'
import {IUser} from "../../interfaces";
import {UserList} from "./UsersList";

interface IUsersProps {
  users?: IUser[]
}

const NoUsers = () => <div>Config file for users not found</div>

export const Users = ({users}: IUsersProps) => (
  <div>
    {users ? <UserList users={users} /> : <NoUsers />}
  </div>
)