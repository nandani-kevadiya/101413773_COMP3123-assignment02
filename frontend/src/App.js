import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>User Management</h1>
        <Routes>
          <Route path="/" exact component={UserList} />
          <Route path="/add" component={AddUser} />
          <Route path="/update/:id" component={UpdateUser} />
          <Route path="/delete/:id" component={DeleteUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

