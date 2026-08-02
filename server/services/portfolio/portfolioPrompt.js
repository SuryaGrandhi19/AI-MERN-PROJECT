const buildPortfolioPrompt = (portfolio) => {

return `
You are an expert UI/UX reviewer, ATS reviewer and Software Engineering recruiter.

Analyze the following portfolio website.

Return ONLY valid JSON.

{
  "overallScore":0,
  "uiUxScore":0,
  "contentScore":0,
  "seoScore":0,
  "strengths":[],
  "weaknesses":[],
  "suggestions":[]
}

Website Information

Title:
${portfolio.title}

Meta Description:
${portfolio.description}

Headings:
${portfolio.headings.join("\n")}

Paragraphs:
${portfolio.paragraphs.join("\n")}

Visible Website Text:
${portfolio.bodyText}
`;

};

module.exports = buildPortfolioPrompt;