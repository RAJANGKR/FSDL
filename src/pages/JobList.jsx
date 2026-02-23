import { useNavigate } from "react-router-dom";
import "../styles/JobList.css";

const MOCK_JOBS = [
  {
    id: 1,
    company: "TCS",
    role: "System Engineer",
    salary: "7 LPA",
    eligibility: { cgpa: 7.0, branch: "CS, IT, ENTC" },
    deadline: "2024-03-10",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Specialist Programmer",
    salary: "9.5 LPA",
    eligibility: { cgpa: 7.5, branch: "CS, IT" },
    deadline: "2024-03-15",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    id: 3,
    company: "Wipro",
    role: "Project Engineer",
    salary: "6.5 LPA",
    eligibility: { cgpa: 6.0, branch: "All Branches" },
    deadline: "2024-03-20",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
  {
    id: 4,
    company: "Accenture",
    role: "App Development Assoc.",
    salary: "4.5 LPA",
    eligibility: { cgpa: 6.5, branch: "All Branches" },
    deadline: "2024-03-25",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
];

function JobList() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Find Your Dream Career <br /> <span className="highlight">Start Here</span></h1>
        <p>Explore active placement drives from top tier companies.</p>

        <div className="search-bar">
          <input type="text" placeholder="Search for roles or companies..." />
          <button className="primary-btn">Search</button>
        </div>
      </div>

      <h2 className="section-title">Active Job Drives ({MOCK_JOBS.length})</h2>

      <div className="jobs-grid">
        {MOCK_JOBS.map((job) => (
          <div key={job.id} className="job-card glass-panel">
            <div className="job-header">
              <div className="logo-wrapper">
                <img src={job.logo} alt={job.company} className="company-logo" />
              </div>
              <div>
                <h3>{job.company}</h3>
                <span className="job-role">{job.role}</span>
              </div>
            </div>

            <div className="job-details">
              <div className="detail-row">
                <span>💰 Package</span>
                <strong>{job.salary}</strong>
              </div>
              <div className="detail-row">
                <span>🎓 Eligibility</span>
                <strong>{job.eligibility.cgpa} CGPA</strong>
              </div>
              <div className="detail-row">
                <span>📅 Deadline</span>
                <strong>{job.deadline}</strong>
              </div>
            </div>

            <button
              className="view-btn"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
