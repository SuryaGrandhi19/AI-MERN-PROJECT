import ATSScoreCard from "./ATSScoreCard";
import"./ResumeResult.css";
function ResumeResult({ result }) {

    return (

        <div className="resume-result">


            {/* ATS Score */}

            <ATSScoreCard score={result.atsScore} />


            {/* Overall Score */}

            <div className="result-section">

                <h2>Overall Score</h2>

                <p>
                    {result.overallScore}/100
                </p>

            </div>



            {/* Technical Skills */}

            <div className="result-section">

                <h2>Technical Skills</h2>

                <div className="skills-container">

                    {
                        result.technicalSkills?.map(
                            (skill,index)=>(
                                <span key={index}>
                                    {skill}
                                </span>
                            )
                        )
                    }

                </div>

            </div>




            {/* Soft Skills */}

            <div className="result-section">

                <h2>Soft Skills</h2>


                <div className="skills-container">

                    {
                        result.softSkills?.map(
                            (skill,index)=>(
                                <span key={index}>
                                    {skill}
                                </span>
                            )
                        )
                    }

                </div>


            </div>




            {/* Strengths */}

            <div className="result-section">

                <h2>Strengths</h2>


                <ul>

                    {
                        result.strengths?.map(
                            (item,index)=>(
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )
                    }

                </ul>


            </div>





            {/* Weaknesses */}

            <div className="result-section">

                <h2>Weaknesses</h2>


                <ul>

                    {
                        result.weaknesses?.map(
                            (item,index)=>(
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )
                    }

                </ul>


            </div>





            {/* Missing Keywords */}

            <div className="result-section">

                <h2>Missing Keywords</h2>


                <div className="skills-container">

                    {
                        result.missingKeywords?.map(
                            (item,index)=>(
                                <span key={index}>
                                    {item}
                                </span>
                            )
                        )
                    }


                </div>


            </div>





            {/* Suggestions */}

            <div className="result-section">


                <h2>AI Suggestions</h2>


                <ul>

                    {
                        result.suggestions?.map(
                            (item,index)=>(
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        )
                    }

                </ul>


            </div>






            {/* Career Recommendation */}

            <div className="result-section">


                <h2>Career Recommendation</h2>


                <p>
                    {result.careerRecommendation}
                </p>


            </div>



        </div>

    );

}


export default ResumeResult;