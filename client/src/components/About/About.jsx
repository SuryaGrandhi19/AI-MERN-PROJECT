import "./About.css";

function About(){

    return(

        <section className="about" id="about">

            <div className="container">

                <div className="about-header">

                    <h2>

                        About AI Portfolio Reviewer

                    </h2>

                    <p>

                        Build stronger resumes and portfolios with
                        Artificial Intelligence.

                    </p>

                </div>

                <div className="about-grid">

                    <div className="about-card">

                        <h3>🎯 Our Mission</h3>

                        <p>

                            Help students and developers improve their
                            resumes and portfolios using AI powered
                            analysis.

                        </p>

                    </div>

                    <div className="about-card">

                        <h3>🤖 AI Analysis</h3>

                        <p>

                            Analyze ATS compatibility, technical
                            skills, UI/UX, SEO and receive
                            personalized career suggestions.

                        </p>

                    </div>

                    <div className="about-card">

                        <h3>⚡ Instant Reports</h3>

                        <p>

                            Upload your resume or portfolio and
                            receive detailed insights within seconds.

                        </p>

                    </div>

                    <div className="about-card">

                        <h3>🚀 Built for Developers</h3>

                        <p>

                            Designed especially for students,
                            freshers and software developers preparing
                            for placements.

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;