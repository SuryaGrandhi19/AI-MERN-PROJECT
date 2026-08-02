import { Link } from "react-router-dom";
import {
    FaFileAlt,
    FaGlobe,
    FaUser,
    FaChartLine
} from "react-icons/fa";

import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">

            <div className="dashboard-header">

                <h1>Welcome Back 👋</h1>

                <p>
                    Review your resume and portfolio using AI to improve your chances of getting hired.
                </p>

            </div>

            <div className="dashboard-cards">

                <Link to="/resume-reviewer" className="dashboard-card">

                    <FaFileAlt className="card-icon" />

                    <h3>Resume Review</h3>

                    <p>
                        Analyse your resume and receive ATS score with AI feedback.
                    </p>

                </Link>

                <Link to="/portfolio-reviewer" className="dashboard-card">

                    <FaGlobe className="card-icon" />

                    <h3>Portfolio Review</h3>

                    <p>
                        Analyse your portfolio website and improve its quality.
                    </p>

                </Link>

                <Link to="/profile" className="dashboard-card">

                    <FaUser className="card-icon" />

                    <h3>Profile</h3>

                    <p>
                        Manage your account and personal information.
                    </p>

                </Link>

                <div className="dashboard-card disabled">

                    <FaChartLine className="card-icon" />

                    <h3>Review History</h3>

                    <p>
                        Coming Soon...
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;