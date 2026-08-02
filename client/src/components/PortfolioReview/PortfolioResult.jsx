import PortfolioScoreCard from "./PortfolioScoreCard";

import "./PortfolioResult.css";

function PortfolioResult({ result }) {

    return (

        <div className="portfolio-result">

            <div className="portfolio-score-grid">

                <PortfolioScoreCard

                    title="Overall"

                    score={result.overallScore}

                />

                <PortfolioScoreCard

                    title="UI / UX"

                    score={result.uiUxScore}

                />

                <PortfolioScoreCard

                    title="Content"

                    score={result.contentScore}

                />

                <PortfolioScoreCard

                    title="SEO"

                    score={result.seoScore}

                />

            </div>



            <section className="portfolio-section">

                <h2>
                    💪 Strengths
                </h2>

                {
                    result.strengths?.map((item, index) => (

                        <div

                            key={index}

                            className="strength-card"

                        >

                            {item}

                        </div>

                    ))
                }

            </section>



            <section className="portfolio-section">

                <h2>
                    ⚠ Weaknesses
                </h2>

                {
                    result.weaknesses?.map((item, index) => (

                        <div

                            key={index}

                            className="weakness-card"

                        >

                            {item}

                        </div>

                    ))
                }

            </section>




            <section className="portfolio-section">

                <h2>

                    🤖 AI Suggestions

                </h2>

                {
                    result.suggestions?.map((item, index) => (

                        <div

                            key={index}

                            className="suggestion-card"

                        >

                            <b>

                                {index + 1}.

                            </b>

                            {" "}

                            {item}

                        </div>

                    ))
                }

            </section>

        </div>

    );

}

export default PortfolioResult;