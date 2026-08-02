import "./Features.css";
import { motion } from "framer-motion";

import {
    FaFileAlt,
    FaGlobe,
    FaRobot,
    FaLock,
    FaChartLine,
    FaLightbulb
} from "react-icons/fa";

const features = [

    {
        icon: <FaFileAlt />,
        title: "Resume ATS Analysis",
        description:
            "Analyse your resume instantly with AI and receive an ATS compatibility score."
    },

    {
        icon: <FaGlobe />,
        title: "Portfolio Review",
        description:
            "Evaluate your portfolio website for UI, content, accessibility and SEO."
    },

    {
        icon: <FaRobot />,
        title: "AI Recommendations",
        description:
            "Receive personalised suggestions to improve your chances of getting shortlisted."
    },

    {
        icon: <FaChartLine />,
        title: "Performance Scores",
        description:
            "Understand your overall score with detailed category-wise analysis."
    },

    {
        icon: <FaLightbulb />,
        title: "Smart Insights",
        description:
            "Discover missing sections, weak content and actionable improvements."
    },

    {
        icon: <FaLock />,
        title: "Secure Dashboard",
        description:
            "Save all your AI reviews securely after signing in and access them anytime."
    }

];

function Features() {

    return (

        <section className="features" id="features">

            <div className="container">

                <motion.div
                    className="section-title"
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:.6}}
                >

                    <h2>Powerful Features</h2>

                    <p>

                        Everything you need to improve your resume
                        and portfolio using Artificial Intelligence.

                    </p>

                </motion.div>

                <div className="features-grid">

                    {

                        features.map((feature,index)=>(

                            <motion.div

                                key={index}

                                className="feature-card"

                                initial={{opacity:0,y:50}}

                                whileInView={{opacity:1,y:0}}

                                viewport={{once:true}}

                                transition={{
                                    duration:.5,
                                    delay:index*0.1
                                }}

                            >

                                <div className="feature-icon">

                                    {feature.icon}

                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                            </motion.div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Features;