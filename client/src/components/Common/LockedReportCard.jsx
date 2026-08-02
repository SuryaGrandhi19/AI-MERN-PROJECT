import { Link } from "react-router-dom";
import "./LockedReportCard.css";

function LockedReportCard() {

    return (

        <div className="locked-card">

            <h2>🔒 Unlock Complete AI Report</h2>

            <p>

                Create a free account to view:

            </p>

            <ul>

                <li>Technical Skills</li>

                <li>Soft Skills</li>

                <li>Strengths</li>

                <li>Weaknesses</li>

                <li>Suggestions</li>

                <li>Career Recommendation</li>

            </ul>

            <div className="locked-buttons">

                <Link to="/login">

                    Login

                </Link>

                <Link to="/register">

                    Register

                </Link>

            </div>

        </div>

    );

}

export default LockedReportCard;