import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    users: initialUsers,
    selectedUser: initialSelectedUsers,
    children
  } = props;

  // Use State to keep the values
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

  // Make the context value:
  const usersContext = {
    users,
    setUsers,
    selectedUser,
    setSelectedUser
  };

  return <Context.Provider value={usersContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  users: PropTypes.array,
  selectedUser: PropTypes.object
};

Provider.defaultProps = {
  users: [],
  selectedUser: {}
};
