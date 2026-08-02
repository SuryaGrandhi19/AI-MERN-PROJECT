import { useState } from "react";

import PortfolioInput from "../components/PortfolioReview/PortfolioInput";
import PortfolioResult from "../components/PortfolioReview/PortfolioResult";

import "../styles/portfolioReview.css";

function PortfolioReview() {

    const [result, setResult] = useState(null);

    return (

        <div className="portfolio-page">

            <div className="portfolio-header">

                <h1>
                    AI Portfolio Reviewer
                </h1>

                <p>
                    Submit your portfolio website and receive an AI-powered
                    review covering UI/UX, SEO, content quality and actionable
                    suggestions.
                </p>

            </div>

            <PortfolioInput setResult={setResult} />

            {
                result &&
                <PortfolioResult result={result} />
            }

        </div>

    );

}

export default PortfolioReview;
// import { useState } from "react";

// import PortfolioInput from "../components/PortfolioReview/PortfolioInput";
// import PortfolioPreviewInput from "../components/PortfolioReview/PortfolioPreviewInput";

// import PortfolioResult from "../components/PortfolioReview/PortfolioResult";

// import LockedReportCard from "../components/Common/LockedReportCard";

// import useAuth from "../hooks/useAuth";

// import "../styles/portfolioReview.css";

// function PortfolioReview() {

//     const { user } = useAuth();

//     const [result, setResult] = useState(null);

//     return (

//         <div className="portfolio-page">

//             <div className="portfolio-header">

//                 <h1>AI Portfolio Reviewer</h1>

//                 <p>

//                     Submit your portfolio website and receive an AI-powered review.

//                 </p>

//             </div>

//             {

//                 user

//                     ?

//                     <PortfolioInput setResult={setResult} />

//                     :

//                     <PortfolioPreviewInput setResult={setResult} />

//             }

//            {
//     result && (

//         user ? (

//             <PortfolioResult result={result} />

//         ) : (

//             <>

//                 <div className="preview-result">

//                     <div className="score-card">

//                         <h2>Overall Score</h2>

//                         <div className="score-circle">

//                             {result.overallScore}

//                         </div>

//                     </div>

//                     <div className="score-card">

//                         <h2>UI / UX</h2>

//                         <div className="score-circle">

//                             {result.uiUxScore}

//                         </div>

//                     </div>

//                     <div className="score-card">

//                         <h2>Content</h2>

//                         <div className="score-circle">

//                             {result.contentScore}

//                         </div>

//                     </div>

//                     <div className="score-card">

//                         <h2>SEO</h2>

//                         <div className="score-circle">

//                             {result.seoScore}

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

// export default PortfolioReview;