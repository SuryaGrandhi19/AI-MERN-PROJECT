import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {

    return (

        <section className="contact" id="contact">

            <div className="container">

                <div className="contact-header">

                    <h2>Get In Touch</h2>

                    <p>

                        Have questions or suggestions? Feel free to reach out.

                    </p>

                </div>

                <div className="contact-grid">

                    <div className="contact-card">

                        <FaEnvelope className="contact-icon"/>

                        <h3>Email</h3>

                        <p>muraligrandhi119@gmail.com</p>

                    </div>

                    <div className="contact-card">

                        <FaGithub className="contact-icon"/>

                        <h3>GitHub</h3>

                        <p>https://github.com/SuryaGrandhi19</p>

                    </div>

                    <div className="contact-card">

                        <FaLinkedin className="contact-icon"/>

                        <h3>LinkedIn</h3>

                        <p>www.linkedin.com/in/murali-grandhi-500aba36b</p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;