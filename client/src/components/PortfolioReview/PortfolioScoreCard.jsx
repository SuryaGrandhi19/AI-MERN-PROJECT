import "./PortfolioScoreCard.css";

function PortfolioScoreCard({ title, score }) {

    return (

        <div className="portfolio-score-card">

            <h3>

                {title}

            </h3>

            <div className="portfolio-score-circle">

                {score}/100

            </div>

        </div>

    );

}

export default PortfolioScoreCard;