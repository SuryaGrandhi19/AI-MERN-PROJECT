const Portfolio = require("../models/Portfolio");

const {
    analysePortfolio
} = require("../services/portfolio/portfolioService");

// ================= Full Review (Protected) =================

exports.reviewPortfolio = async (req, res) => {

    try {

        const { portfolioUrl } = req.body;

        const review = await analysePortfolio(portfolioUrl);

        const portfolio = await Portfolio.create({

            user: req.user._id,

            portfolioUrl,

            review

        });

        res.status(200).json({

            success: true,

            portfolio

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Preview (Public) =================

exports.previewPortfolio = async (req, res) => {

    try {

        const { portfolioUrl } = req.body;

        const review = await analysePortfolio(portfolioUrl);

        res.status(200).json({

            success: true,

            preview: {

                overallScore: review.overallScore,

                uiUxScore: review.uiUxScore,

                contentScore: review.contentScore,

                seoScore: review.seoScore

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};