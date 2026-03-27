import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function LocalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Local Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name} | {user.email} | {user.phone}</p>
        </div>
      ))} <br />
    <Button variant="outlined" onClick={() => navigate("/")}>
        ⬅ Back
    </Button>
    </div>
  );
}

export default LocalUserList;