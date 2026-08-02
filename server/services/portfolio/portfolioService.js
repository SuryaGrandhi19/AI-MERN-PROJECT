const scrapeWebsite = require("../../utils/scrapeWebsite");

const buildPrompt = require("./portfolioPrompt");

const askAI = require("../ai/llmProvider");

const analysePortfolio = async (url) => {

    const portfolio = await scrapeWebsite(url);

    const prompt = buildPrompt(portfolio);

    const response = await askAI(prompt);

    const cleaned = response
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(cleaned);

};

module.exports = {
    analysePortfolio
};