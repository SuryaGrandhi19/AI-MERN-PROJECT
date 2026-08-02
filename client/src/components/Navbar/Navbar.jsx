import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

import useAuth from "../../hooks/useAuth";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const { user, logout } = useAuth();

    const handleLogout = async () => {

        await logout();

        navigate("/");

    };

    return (

        <nav className="navbar">

            <div className="container navbar-container">

                <Link to="/" className="logo">

                    <FaRobot className="logo-icon" />

                    <span>AI Portfolio Reviewer</span>

                </Link>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#features">Features</a>
                    </li>

                    <li>
                        <a href="#how">How It Works</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                </ul>

                <div className="nav-buttons">

                    <Link className="review-btn" to="/resume-demo">
                        Resume
                    </Link>

                    <Link className="review-btn" to="/portfolio-demo">
                        Portfolio
                    </Link>

                    {user ? (

                        <>

                            <Link className="login-btn" to="/dashboard">
                                Dashboard
                            </Link>

                            <Link className="login-btn" to="/profile">
                                Profile
                            </Link>

                            <button
                                className="register-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </>

                    ) : (

                        <>

                            <Link className="login-btn" to="/login">
                                Login
                            </Link>

                            <Link className="register-btn" to="/register">
                                Register
                            </Link>

                        </>

                    )}

                </div>

                <div
                    className="menu-icon"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {menuOpen ? <HiX /> : <HiMenu />}

                </div>

            </div>

        </nav>

    );

}

export default Navbar;