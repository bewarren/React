import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addNewUserhandler = (user) => {
    setUserList((prevUserList) => {
      return [user, ...prevUserList];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addNewUserhandler} />
      <UserList users={userList} />
    </Fragment>
  );
}

export default App;
