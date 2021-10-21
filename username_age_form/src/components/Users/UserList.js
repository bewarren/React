import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return <div></div>;
  }
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return <li key={user.key}>{`${user.username} (${user.age})`}</li>;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
