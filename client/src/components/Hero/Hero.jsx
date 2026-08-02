import "./Hero.css";
import { Link } from "react-router-dom";
import { FaFileAlt, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="container hero-container">

                <motion.div
                    className="hero-left"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <span className="hero-badge">
                        🚀 AI Powered Resume & Portfolio Analysis
                    </span>

                    <h1>
                        Land Your Dream Job with
                        <span> AI-Powered Reviews</span>
                    </h1>

                    <p>
                        Analyse your Resume and Portfolio instantly using AI.
                        Improve ATS score, discover weaknesses,
                        receive actionable suggestions,
                        and stand out to recruiters.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/resume-demo"
                            className="primary-btn"
                        >
                            <FaFileAlt />
                            Review Resume
                        </Link>

                        <Link
                            to="/portfolio-demo"
                            className="secondary-btn"
                        >
                            <FaGlobe />
                            Review Portfolio
                        </Link>

                    </div>

                    <div className="hero-features">

                        <div>
                            <FaCheckCircle />
                            ATS Friendly
                        </div>

                        <div>
                            <FaCheckCircle />
                            AI Suggestions
                        </div>

                        <div>
                            <FaCheckCircle />
                            Instant Review
                        </div>

                    </div>

                </motion.div>

                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >

                    <div className="score-card">

                        <h3>AI Review Summary</h3>

                        <div className="score-row">
                            <span>ATS Score</span>
                            <strong>92%</strong>
                        </div>

                        <div className="score-row">
                            <span>Portfolio Score</span>
                            <strong>89%</strong>
                        </div>

                        <div className="score-row">
                            <span>AI Accuracy</span>
                            <strong>95%</strong>
                        </div>

                        <Link to="/login" className="unlock-btn">
                            Login to Unlock Full Report
                        </Link>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;