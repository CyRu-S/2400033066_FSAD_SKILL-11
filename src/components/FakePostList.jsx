import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const userIds = [...new Set(posts.map(p => p.userId))].sort((a,b)=>a-b);
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredPosts = filter
    ? posts.filter((p) => p.userId === Number(filter))
    : posts;

  return (
    <div>
      <h2>Fake API Posts</h2>
      <br />
      <Button variant="outlined" onClick={() => navigate("/")}>
        ⬅ Back
      </Button>

      <br /><br />
      <button onClick={fetchData}>Refresh</button>

      <br /><br />

    <select onChange={(e) => setFilter(e.target.value)}>
    <option value="">All Users</option>
    {userIds.map((id) => (
        <option key={id} value={id}>
        User {id}
        </option>
    ))}
    </select>

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;