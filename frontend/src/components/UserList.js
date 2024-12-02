import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="list-container">
      <h2>Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user._id}`} className="action-button">
                  Edit
                </Link>
                <Link to={`/delete/${user._id}`} className="action-button delete">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add" className="add-button">
        Add User
      </Link>
    </div>
  );
}

export default UserList;

