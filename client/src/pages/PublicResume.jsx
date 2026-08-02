import { useState } from "react";

import ResumePreviewUpload from "../components/Resume/ResumePreviewUpload";

import LockedReportCard from "../components/Common/LockedReportCard";

import ATSScoreCard from "../components/Resume/ATSScoreCard";

import "./resume.css";

function PublicResume(){

    const [result,setResult]=useState(null);


    return(

        <div className="resume-page">


            <div className="resume-header">

                <h1>
                    AI Resume Reviewer
                </h1>


                <p>

                Upload your resume and check your ATS compatibility score instantly.

                Login to unlock complete AI analysis.

                </p>


            </div>



            <ResumePreviewUpload 
                setResult={setResult}
            />



            {
                result &&

                <>

                    <div className="preview-result">


                        <ATSScoreCard 
                            score={result.atsScore}
                        />


                        <div className="score-card">


                            <h2>
                                Overall Score
                            </h2>


                            <div className="score-circle">

                                {result.overallScore}/100

                            </div>


                        </div>


                    </div>



                    <LockedReportCard />


                </>

            }


        </div>

    );

}


export default PublicResume;