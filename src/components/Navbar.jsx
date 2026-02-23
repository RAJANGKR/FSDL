import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored tokens (placeholder for now)
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/jobs">PCCoE Jobs</Link>
      </div>
      <div className="navbar-links">
        <Link to="/jobs">Jobs</Link>
        <Link to="/applications">My Applications</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
