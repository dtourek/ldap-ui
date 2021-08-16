import React from "react";
import {IUser} from "../../interfaces";

interface IUserListProps {
  users: IUser[]
}

export const UserList = ({users}: IUserListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <div key={user.username} style={{ marginBottom: 10 }}>
          {Object.entries(user).map(([key, value]) =>
            <li key={`${key}-${value}`}><b>{key}</b> - {value}</li>)
          }
        </div>
      ))}
    </ul>
  )
}