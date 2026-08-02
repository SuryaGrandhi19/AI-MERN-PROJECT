import "./Sidebar.css";

import { Link, useNavigate } from "react-router-dom";

import {
    FaRobot,
    FaUser,
    FaFileAlt,
    FaGlobe,
    FaSignOutAlt,
    FaHome
} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

function Sidebar() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = async () => {

        try {

            await logout();

            navigate("/");

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <aside className="sidebar">

            <div>

                <div className="sidebar-logo">

                    <FaRobot />

                    <span>AI Reviewer</span>

                </div>

                <nav>

                    <Link to="/dashboard">
                        <FaHome />
                        Dashboard
                    </Link>

                    <Link to="/resume-reviewer">
                        <FaFileAlt />
                        Resume Review
                    </Link>

                    <Link to="/portfolio-reviewer">
                        <FaGlobe />
                        Portfolio Review
                    </Link>

                    <Link to="/profile">
                        <FaUser />
                        Profile
                    </Link>

                </nav>

            </div>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                <FaSignOutAlt />
                Logout
            </button>

        </aside>

    );

}

export default Sidebar;