const buildPrompt = (resumeText) => {

return `

You are an expert HR Recruiter and Resume Reviewer.

Analyze the following resume.

DO NOT calculate ATS score.

The ATS score is already calculated separately.

Return ONLY valid JSON.

Do NOT wrap JSON inside markdown.

Return exactly this structure.

{

"overallScore":0,

"technicalSkills":[],

"softSkills":[],

"strengths":[],

"weaknesses":[],

"missingKeywords":[],

"suggestions":[],

"careerRecommendation":""

}

Resume

${resumeText}

`;

};

module.exports = buildPrompt;