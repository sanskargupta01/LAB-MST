
import { useState } from "react";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";

function App() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  // Shared post state
  const [post, setPost] = useState(null);

  // Login
  const handleLogin = (selectedRole) => {
    if (username.trim() === "") {
      alert("Please enter username");
      return;
    }

    setRole(selectedRole);
  };

  // Logout
  const handleLogout = () => {
    setUsername("");
    setRole("");
  };

  // Create Post
  const handleCreatePost = (newPost) => {
    setPost(newPost);
  };

  // Delete Post
  const handleDeletePost = () => {
    setPost(null);
  };

  return (
    <div className="app">

      {role === "" ? (
        <Login
          username={username}
          setUsername={setUsername}
          handleLogin={handleLogin}
        />
      ) : (
        <Dashboard
          username={username}
          role={role}
          post={post}
          handleCreatePost={handleCreatePost}
          handleDeletePost={handleDeletePost}
          handleLogout={handleLogout}
        />
      )}

    </div>
  );
}

export default App;