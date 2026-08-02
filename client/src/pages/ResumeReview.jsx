import { useState } from "react";

import ResumeUpload from "../components/Resume/ResumeUpload";
import ResumeResult from "../components/Resume/ResumeResult";

import "../styles/resumeReview.css";
function ResumeReview() {

    const [result, setResult] = useState(null);

    return (

        <div className="resume-page">

            <div className="resume-header">

                <h1>AI Resume Reviewer</h1>

                <p>

                    Upload your resume and instantly receive an ATS compatibility score.
                    Sign in to unlock detailed AI feedback, strengths, weaknesses and
                    personalised suggestions.

                </p>

            </div>

            <ResumeUpload setResult={setResult} />

            {result && <ResumeResult result={result} />}

        </div>

    );

}

export default ResumeReview;

// import { useState } from "react";

// import ResumeUpload from "../components/Resume/ResumeUpload";
// import ResumePreviewUpload from "../components/Resume/ResumePreviewUpload";
// import ATSScoreCard from "../components/Resume/ATSScoreCard";
// import ResumeResult from "../components/Resume/ResumeResult";
// import LockedReportCard from "../components/Common/LockedReportCard";

// import useAuth from "../hooks/useAuth";

// import "../styles/resumeReview.css";

// function ResumeReview() {

//     const { user } = useAuth();

//     const [result, setResult] = useState(null);

//     return (

//         <div className="resume-page">

//             <div className="resume-header">

//                 <h1>AI Resume Reviewer</h1>

//                 <p>

//                     Upload your resume and instantly receive an ATS compatibility score.

//                     Sign in to unlock detailed AI feedback.

//                 </p>

//             </div>

//             {
//                 user
//                     ?

//                     <ResumeUpload setResult={setResult} />

//                     :

//                     <ResumePreviewUpload setResult={setResult} />
//             }

//             {
//     result && (

//         user ? (

//             <ResumeResult result={result} />

//         ) : (

//             <>

//                 <div className="preview-result">

//                     <ATSScoreCard score={result.atsScore} />

//                     <div className="overall-preview">

//                         <h2>Overall Score</h2>

//                         <div className="score-circle">

//                             {result.overallScore}/100

//                         </div>

//                     </div>

//                 </div>

//                 <LockedReportCard />

//             </>

//         )

//     )
// }
//         </div>

//     );

// }

// export default ResumeReview;