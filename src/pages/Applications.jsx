import "../styles/Applications.css";

const MOCK_APPLICATIONS = [
    {
        id: 1,
        company: "TCS",
        role: "System Engineer",
        date: "2024-02-15",
        status: "Applied",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    },
    {
        id: 2,
        company: "Infosys",
        role: "Specialist Programmer",
        date: "2024-02-10",
        status: "Shortlisted",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    },
    {
        id: 3,
        company: "Wipro",
        role: "Project Engineer",
        date: "2024-01-28",
        status: "Rejected",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
    },
];

function Applications() {
    const getStatusClass = (status) => {
        switch (status) {
            case "Shortlisted": return "status-shortlisted";
            case "Rejected": return "status-rejected";
            default: return "status-applied";
        }
    };

    return (
        <div className="page-container">
            <h2 className="page-title">My Applications</h2>

            {MOCK_APPLICATIONS.length === 0 ? (
                <p>You haven't applied to any jobs yet.</p>
            ) : (
                <div className="applications-list">
                    {MOCK_APPLICATIONS.map((app) => (
                        <div key={app.id} className="application-card">
                            <div className="app-company-info">
                                <img src={app.logo} alt={app.company} className="app-logo" />
                                <div>
                                    <h3>{app.company}</h3>
                                    <p>{app.role}</p>
                                </div>
                            </div>

                            <div className="app-details">
                                <div className="app-date">
                                    <span>Applied on:</span>
                                    <strong>{app.date}</strong>
                                </div>
                                <div className={`app-status ${getStatusClass(app.status)}`}>
                                    {app.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Applications;
