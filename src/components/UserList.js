import axios from "axios";
import { useEffect, useState } from "react";

export const UserList = () => {
  const [users, setusers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setusers(data);
  };
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <h1>ユーザー一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{ user.name } </li>
        ))}
      </ul>
    </>
  )
};
