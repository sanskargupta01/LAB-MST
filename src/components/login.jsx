function Login({
  username,
  setUsername,
  handleLogin
}) {
  return (
    <div className="login-card">

      <div className="mountain-logo">
        🏔️
      </div>

      <h1>Mountain Portal</h1>

      <p className="subtitle">
        Welcome to your mountain dashboard
      </p>

      <div className="input-group">

        <label>Username</label>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      </div>

      <div className="login-buttons">

        <button
          className="admin-btn"
          onClick={() => handleLogin("Admin")}
        >
          🏔️ Login as Admin
        </button>

        <button
          className="viewer-btn"
          onClick={() => handleLogin("Viewer")}
        >
          🥾 Login as Viewer
        </button>

      </div>

      <p className="info">
        Choose your access level to continue
      </p>

    </div>
  );
}

export default Login;