import React, { useContext } from "react";
import { UsersContext } from "./context";

const UserDetails = () => {
  const { selectedUser } = useContext(UsersContext);
  return (
    <div>
      <h4>User Details: </h4>
      {selectedUser && selectedUser.name ? (
        <p>
          Selected User name: <strong>{selectedUser.name}</strong>
        </p>
      ) : (
        <p> Please select a user</p>
      )}
    </div>
  );
};

export default UserDetails;
