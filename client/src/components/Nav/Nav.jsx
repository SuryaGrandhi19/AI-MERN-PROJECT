import { Link, useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import "../Navbar/Navbar.css";
import useAuth from "../../hooks/useAuth";

function Nav() {

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

            </div>

        </nav>

    );

}

export default Nav;