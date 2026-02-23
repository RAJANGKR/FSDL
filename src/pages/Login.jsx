import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/jobs");
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h2>Career Gateway</h2>
        <p className="auth-desc">Your bridge to world-class opportunities. Access exclusive placement drives and track your career milestones.</p>
        <ul>
          <li>
            <span className="icon">🚀</span>
            <div>
              <strong>Top Tier Companies</strong>
              <small>Apply to MNCs and startups</small>
            </div>
          </li>
          <li>
            <span className="icon">📊</span>
            <div>
              <strong>Smart Tracking</strong>
              <small>Real-time application status</small>
            </div>
          </li>
          <li>
            <span className="icon">⚡</span>
            <div>
              <strong>Instant Updates</strong>
              <small>Never miss a deadline</small>
            </div>
          </li>
        </ul>
      </div>

      <div className="auth-right">
        <h2>Login</h2>

        <input type="email" placeholder="Email ID" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>

        <p className="auth-footer">
          New user?{" "}
          <span onClick={() => navigate("/Register")}>
            Register now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
