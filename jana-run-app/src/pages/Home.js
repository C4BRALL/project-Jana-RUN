import React from "react";
import { getUsers } from "../services/dataUsers";

const users = getUsers();
console.log(users);

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul id="renderAPI">
        { users.map((user) => {
          return (
            <li key={ user.id }>
              { user.name }
            </li>
          );
        }) }
      </ul>
    </div>
  )
}

export default Home;
