import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      {/* LEFT PANEL */}
      <div className="auth-left">
        <h2>Join the Elite</h2>
        <p className="auth-desc">Create your student profile and unlock endless career possibilities. Your future starts here.</p>
        <ul>
          <li>
            <span className="icon">🎓</span>
            <div>
              <strong>Exclusive Drives</strong>
              <small>Access premium placement drives</small>
            </div>
          </li>
          <li>
            <span className="icon">📈</span>
            <div>
              <strong>Career Growth</strong>
              <small>Track your progress and skills</small>
            </div>
          </li>
          <li>
            <span className="icon">🔔</span>
            <div>
              <strong>Stay Informed</strong>
              <small>Get notified about new opportunities</small>
            </div>
          </li>
        </ul>
      </div>

      {/* RIGHT PANEL */}
      <div className="auth-right">
        <h2>Create your profile</h2>

        <p className="subtitle">
          Register to access placement drives for{" "}
          <span className="college-highlight">PCCoE</span>
        </p>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Email ID</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Minimum 6 characters" />

        <label>Mobile Number</label>
        <input type="text" placeholder="+91 Enter mobile number" />

        <button onClick={() => navigate("/Login")}>
          Register
        </button>

        <p className="auth-footer">
          Already registered?{" "}
          <span onClick={() => navigate("/Login")}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
