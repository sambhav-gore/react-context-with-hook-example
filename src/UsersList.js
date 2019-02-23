import React, { useContext } from "react";
import { UsersContext } from "./context";

const UsersList = props => {
  const usersContext = useContext(UsersContext);

  const { users, setSelectedUser } = usersContext;

  return (
    <div>
      <h4>Users: </h4>
      {users.map(user => (
        <div key={user.id} onClick={() => setSelectedUser(user)}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UsersList;
