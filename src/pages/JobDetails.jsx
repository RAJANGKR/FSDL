import { useParams, useNavigate } from "react-router-dom";
import "../styles/JobDetails.css";

// Reusing MOCK_JOBS (in a real app, this would be a Context or API call)
const MOCK_JOBS = [
    {
        id: 1,
        company: "TCS",
        role: "System Engineer",
        salary: "7 LPA",
        eligibility: { cgpa: 7.0, branch: "CS, IT, ENTC" },
        deadline: "2024-03-10",
        location: "Pune, Bangalore, Mumbai",
        description: "TCS is looking for System Engineers who are passionate about coding and problem-solving.",
        skills: ["Java", "Python", "SQL", "React"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    },
    {
        id: 2,
        company: "Infosys",
        role: "Specialist Programmer",
        salary: "9.5 LPA",
        eligibility: { cgpa: 7.5, branch: "CS, IT" },
        deadline: "2024-03-15",
        location: "Mysore, Pune",
        description: "Join Infosys as a Specialist Programmer and work on cutting-edge technologies.",
        skills: ["Full Stack", "Node.js", "Cloud Computing"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
    {
        id: 3,
        company: "Wipro",
        role: "Project Engineer",
        salary: "6.5 LPA",
        eligibility: { cgpa: 6.0, branch: "All Branches" },
        deadline: "2024-03-20",
        location: "Hyderabad, Chennai",
        description: "Wipro seeks dynamic project engineers ready to take on challenges.",
        skills: ["C++", "Communication", "Basic Coding"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
        id: 4,
        company: "Accenture",
        role: "App Development Assoc.",
        salary: "4.5 LPA",
        eligibility: { cgpa: 6.5, branch: "All Branches" },
        deadline: "2024-03-25",
        location: "Gurgaon, Pune",
        description: "Accenture is hiring for Application Development Associate role.",
        skills: ["Testing", "Support", "Java"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    },
];

function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = MOCK_JOBS.find((j) => j.id === parseInt(id));

    if (!job) {
        return (
            <div className="page-container">
                <h2>Job not found!</h2>
                <button onClick={() => navigate("/jobs")}>Back to Jobs</button>
            </div>
        );
    }

    const handleApply = () => {
        alert(`Applied successfully to ${job.company}!`);
        navigate("/applications");
    };

    return (
        <div className="page-container">
            <button className="back-btn" onClick={() => navigate("/jobs")}>
                ← Back to Jobs
            </button>

            <div className="job-details-container">
                <div className="details-header">
                    <img src={job.logo} alt={job.company} className="details-logo" />
                    <div>
                        <h1>{job.role}</h1>
                        <h3 className="company-name">{job.company}</h3>
                    </div>
                    <button className="apply-btn" onClick={handleApply}>
                        Apply Now
                    </button>
                </div>

                <div className="details-grid">
                    <div className="detail-item">
                        <span className="label">Package</span>
                        <span className="value">{job.salary}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Location</span>
                        <span className="value">{job.location}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Deadline</span>
                        <span className="value">{job.deadline}</span>
                    </div>
                    <div className="detail-item">
                        <span className="label">Eligibility</span>
                        <span className="value">{job.eligibility.cgpa} CGPA | {job.eligibility.branch}</span>
                    </div>
                </div>

                <div className="section">
                    <h3>Job Description</h3>
                    <p>{job.description}</p>
                </div>

                <div className="section">
                    <h3>Skills Required</h3>
                    <div className="skills-container">
                        {job.skills.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;
