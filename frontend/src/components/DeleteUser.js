import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DeleteUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  }, [id, navigate]);

  return (
    <div>
      <h2>Deleting User...</h2>
    </div>
  );
}

export default DeleteUser;
