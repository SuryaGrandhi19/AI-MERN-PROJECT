const extractText = require("../../utils/extractText");

const buildPrompt = require("./promptBuilder");

const askAI = require("./llmProvider");

const { analyseATS } = require("../resume/atsEngine");


const analyseResume = async (filePath) => {

    try {

        const resumeText = await extractText(filePath);


        const ats = analyseATS(resumeText);


        //const prompt = buildPrompt(resumeText);
        const limitedText = resumeText
        .replace(/\s+/g, " ")
        .substring(0, 10000);

        const prompt = buildPrompt(limitedText);

        const response = await askAI(prompt);


        const cleaned = response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();


        const aiReview = JSON.parse(cleaned);



        return {

            atsScore: ats.atsScore,


            overallScore: Math.round(
                (
                    ats.atsScore +
                    aiReview.overallScore
                ) / 2
            ),


            technicalSkills:
                aiReview.technicalSkills,


            softSkills:
                aiReview.softSkills,


            strengths:
                aiReview.strengths,


            weaknesses: [

                ...aiReview.weaknesses,

                ...ats.contact.remarks,

                ...ats.experience.remarks,

                ...ats.grammar.remarks,

                ...ats.template.remarks

            ],


            missingKeywords: [

                ...new Set([

                    ...aiReview.missingKeywords,

                    ...ats.keyword.missing

                ])

            ],


            suggestions:
                aiReview.suggestions,


            careerRecommendation:
                aiReview.careerRecommendation

        };


    } catch(error) {

        console.error(error);

        throw error;

    }

};


module.exports = {
    analyseResume
};