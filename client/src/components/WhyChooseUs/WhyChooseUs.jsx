import "./WhyChooseUs.css";
import { motion } from "framer-motion";
import {
    FaBrain,
    FaShieldAlt,
    FaBolt,
    FaChartLine,
    FaLaptopCode,
    FaUserTie
} from "react-icons/fa";

const benefits = [

    {
        icon: <FaBrain />,
        title: "AI-Powered Analysis",
        description:
            "Advanced AI analyses resumes and portfolios with detailed insights."
    },

    {
        icon: <FaChartLine />,
        title: "ATS Optimised",
        description:
            "Improve ATS compatibility and increase your interview chances."
    },

    {
        icon: <FaLaptopCode />,
        title: "Portfolio Evaluation",
        description:
            "Analyse UI, SEO, accessibility and overall website quality."
    },

    {
        icon: <FaUserTie />,
        title: "Recruiter Perspective",
        description:
            "Understand how recruiters view your profile and projects."
    },

    {
        icon: <FaBolt />,
        title: "Instant Results",
        description:
            "Receive AI-generated scores and feedback in just a few seconds."
    },

    {
        icon: <FaShieldAlt />,
        title: "Secure & Private",
        description:
            "Your uploaded data is processed securely and stored only in your account."
    }

];

function WhyChooseUs() {

    return (

        <section className="why" id="why">

            <div className="container">

                <motion.div
                    className="section-title"
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                >

                    <h2>Why Choose Us?</h2>

                    <p>

                        Everything you need to build a stronger professional profile.

                    </p>

                </motion.div>

                <div className="why-container">

                    <div className="why-grid">

                        {

                            benefits.map((item,index)=>(

                                <motion.div

                                    key={index}

                                    className="why-card"

                                    initial={{opacity:0,y:40}}

                                    whileInView={{opacity:1,y:0}}

                                    viewport={{once:true}}

                                    transition={{
                                        delay:index*0.08
                                    }}

                                >

                                    <div className="why-icon">

                                        {item.icon}

                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                </motion.div>

                            ))

                        }

                    </div>

                    <motion.div

                        className="stats-box"

                        initial={{opacity:0,x:60}}

                        whileInView={{opacity:1,x:0}}

                        viewport={{once:true}}

                    >

                        <h2>Trusted AI Platform</h2>

                        <p>

                            Improve your career profile with intelligent AI reviews.

                        </p>

                        <div className="stats">

                            <div>
                                <h3>95%</h3>
                                <span>AI Accuracy</span>
                            </div>

                            <div>
                                <h3>2 Sec</h3>
                                <span>Average Review</span>
                            </div>

                            <div>
                                <h3>24/7</h3>
                                <span>Availability</span>
                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    );

}

export default WhyChooseUs;