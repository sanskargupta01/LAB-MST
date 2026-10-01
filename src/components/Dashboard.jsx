import { useState } from "react";

function Dashboard({
  username,
  role,
  post,
  handleCreatePost,
  handleDeletePost,
  handleLogout
}) {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Create Post
  const createPost = () => {
    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and content");
      return;
    }

    const newPost = {
      title: title,
      content: content,
      author: username
    };

    handleCreatePost(newPost);

    setTitle("");
    setContent("");
    setShowCreateForm(false);
  };

  return (
    <div className="dashboard-card">

      {/* HEADER */}

      <div className="dashboard-header">

        <div>

          <p className="location-label">
            🏔️ MOUNTAIN COMMUNITY
          </p>

          <h1>
            Welcome, {username}
          </h1>

          <p className="role-text">
            Logged in as{" "}
            <span className={role.toLowerCase()}>
              {role}
            </span>
          </p>

        </div>

        <div className="user-icon">
          {role === "Admin" ? "🏔️" : "🥾"}
        </div>

      </div>


      {/* ADMIN PANEL */}

      {role === "Admin" && (
        <div className="admin-section">

          <div className="access-box admin-access">

            <h2>🏔️ Mountain Admin</h2>

            <p>
              You have permission to create and
              manage mountain posts.
            </p>

          </div>

          {!showCreateForm && (
            <button
              className="create-btn"
              onClick={() => setShowCreateForm(true)}
            >
              ✦ Create Mountain Post
            </button>
          )}

          {/* CREATE FORM */}

          {showCreateForm && (
            <div className="create-post-box">

              <h3>🏔️ Create New Post</h3>

              <input
                type="text"
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea
                placeholder="Write something about the mountains..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <div className="post-form-buttons">

                <button
                  className="publish-btn"
                  onClick={createPost}
                >
                  Publish Post
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => {
                    setShowCreateForm(false);
                    setTitle("");
                    setContent("");
                  }}
                >
                  Cancel
                </button>

              </div>

            </div>
          )}

        </div>
      )}


      {/* VIEWER PANEL */}

      {role === "Viewer" && (
        <div className="access-box viewer-access">

          <h2>🥾 Mountain Explorer</h2>

          <p>
            🔒 You have read-only access.
          </p>

          <p>
            Explore the posts shared by the
            mountain community.
          </p>

        </div>
      )}


      {/* POSTS */}

      <div className="posts-section">

        <div className="section-title">

          <h2>🏔️ Mountain Posts</h2>

          <span>
            {post ? "1 Post" : "0 Posts"}
          </span>

        </div>

        {post ? (

          <div className="post-card">

            <div className="post-header">

              <div>

                <span className="post-tag">
                  MOUNTAIN STORY
                </span>

                <h3>{post.title}</h3>

              </div>

              {role === "Admin" && (
                <button
                  className="small-delete-btn"
                  onClick={handleDeletePost}
                >
                  🗑️ Delete
                </button>
              )}

            </div>

            <p className="post-content">
              {post.content}
            </p>

            <div className="post-author">
              🥾 Posted by <strong>{post.author}</strong>
            </div>

          </div>

        ) : (

          <div className="no-post">

            <div className="empty-mountain">
              🏔️
            </div>

            <h3>
              No mountain stories yet
            </h3>

            {role === "Admin" ? (
              <p>
                Create the first post for the community.
              </p>
            ) : (
              <p>
                Wait for an Admin to publish a post.
              </p>
            )}

          </div>

        )}

      </div>


      {/* LOGOUT */}

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        ← Leave Mountain Portal
      </button>

    </div>
  );
}

export default Dashboard;