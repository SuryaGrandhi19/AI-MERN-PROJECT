import { useState } from "react";
import { reviewPortfolio } from "../../services/portfolioApi";
import { previewPortfolio } from "../../services/portfolioApi";
import { toast } from "react-hot-toast";

import "../../styles/portfolioReview.css";

function PortfolioInput({ setResult }) {

    const [portfolioUrl, setPortfolioUrl] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!portfolioUrl.trim()) {

            toast.error("Please enter portfolio URL");

            return;

        }

        try {

            setLoading(true);

            const data = await reviewPortfolio(portfolioUrl);

            setResult(data.portfolio.review);

            toast.success("Portfolio analysed successfully");

        }

        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Analysis failed"
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="upload-card">

            <form onSubmit={handleSubmit} className="portfolio-form">

                <input
                    type="url"
                    placeholder="https://yourportfolio.vercel.app"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    required
                />

                <button disabled={loading}>

                    {loading ? "Analysing..." : "Analyse Portfolio"}

                </button>

            </form>

        </div>

    );

}

export default PortfolioInput;