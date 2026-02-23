import "../styles/StudentProfile.css";

function StudentProfile() {
    const student = {
        name: " Rjn G",
        email: " rajan.garudkar24@pccoepune.org",
        mobile: " 9876543210",
        college: " Pimpri Chinchwad College of Engineering",
        branch: " CSE-AIML",
        cgpa: 7.9,
        skills: ["React", "Node.js", "Java", "SQL"],
        resume: " xyz_resume.pdf",
    };

    return (
        <div className="page-container">
            <h2 className="page-title">My Profile</h2>

            <div className="profile-container">
                <div className="profile-header">
                    <div className="avatar">{student.name.charAt(0)}</div>
                    <div>
                        <h1>{student.name}</h1>
                        <p className="profile-email">{student.email}</p>
                    </div>
                    <button className="edit-btn">Edit Profile</button>
                </div>

                <div className="profile-grid">
                    <div className="profile-section">
                        <h3>Academic Details</h3>
                        <div className="info-row">
                            <span>College:</span> <strong>{student.college}</strong>
                        </div>
                        <div className="info-row">
                            <span>Branch:</span> <strong>{student.branch}</strong>
                        </div>
                        <div className="info-row">
                            <span>CGPA:</span> <strong>{student.cgpa}</strong>
                        </div>
                    </div>

                    <div className="profile-section">
                        <h3>Contact Details</h3>
                        <div className="info-row">
                            <span>Mobile:</span> <strong>{student.mobile}</strong>
                        </div>
                        <div className="info-row">
                            <span>Email:</span> <strong>{student.email}</strong>
                        </div>
                    </div>

                    <div className="profile-section full-width">
                        <h3>Resume & Skills</h3>
                        <div className="info-row">
                            <span>Resume:</span>
                            <a href="#" className="resume-link">📄 {student.resume}</a>
                        </div>
                        <div className="skills-list">
                            {student.skills.map((skill, index) => (
                                <span key={index} className="skill-badge">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;
