import "./HowItWorks.css";
import { motion } from "framer-motion";

import {
    FaUpload,
    FaRobot,
    FaChartBar,
    FaUnlockAlt
} from "react-icons/fa";

const steps = [

    {
        icon: <FaUpload />,
        title: "Upload or Enter URL",
        description:
            "Upload your resume PDF or enter your portfolio website URL."
    },

    {
        icon: <FaRobot />,
        title: "AI Analysis",
        description:
            "Our AI analyses your content using ATS checks, NLP, and website evaluation."
    },

    {
        icon: <FaChartBar />,
        title: "Get Instant Scores",
        description:
            "Receive ATS score, overall score and portfolio performance instantly."
    },

    {
        icon: <FaUnlockAlt />,
        title: "Unlock Full Review",
        description:
            "Login to access strengths, weaknesses and detailed AI recommendations."
    }

];

function HowItWorks() {

    return (

        <section className="how" id="how">

            <div className="container">

                <motion.div
                    className="section-title"
                    initial={{ opacity:0,y:40 }}
                    whileInView={{ opacity:1,y:0 }}
                    viewport={{ once:true }}
                >

                    <h2>How It Works</h2>

                    <p>

                        Get AI-powered insights in just four simple steps.

                    </p>

                </motion.div>

                <div className="timeline">

                    {

                        steps.map((step,index)=>(

                            <motion.div

                                className="timeline-card"

                                key={index}

                                initial={{opacity:0,y:50}}

                                whileInView={{opacity:1,y:0}}

                                viewport={{once:true}}

                                transition={{
                                    duration:.5,
                                    delay:index*.15
                                }}

                            >

                                <div className="step-number">

                                    {index+1}

                                </div>

                                <div className="timeline-icon">

                                    {step.icon}

                                </div>

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>

                            </motion.div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default HowItWorks;