const Resume = require("../models/Resume");

const { analyseResume } = require("../services/ai/aiService");

exports.reviewResume = async (req, res) => {

    try {

        const resume = await Resume.findById(req.params.id);

        if (!resume) {

            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });

        }

        const review = await analyseResume(resume.filePath);

        resume.aiReview = review;

        resume.reviewStatus = "Completed";

        await resume.save();

        res.status(200).json({

            success: true,

            message: "Resume analyzed successfully",

            review

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};