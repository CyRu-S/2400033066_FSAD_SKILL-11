import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>

      <Stack spacing={2} alignItems="center">
        <Button variant="contained" onClick={() => navigate("/local")}>
          Local Users
        </Button>

        <Button variant="contained" onClick={() => navigate("/users")}>
          Users API
        </Button>

        <Button variant="contained" onClick={() => navigate("/posts")}>
          Fake API Posts
        </Button>
      </Stack>
    </div>
  );
}

export default Dashboard;