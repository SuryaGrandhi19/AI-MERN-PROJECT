function ATSScoreCard({ score }) {

    return (

        <div className="score-card">

            <h2>ATS Score</h2>

            <div className="score-circle">

                {score}/100

            </div>

        </div>

    );

}

export default ATSScoreCard;