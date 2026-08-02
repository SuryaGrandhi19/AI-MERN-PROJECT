const Resume = require("../models/Resume");
const { analyseResume } = require("../services/ai/aiService");

// ================= Upload Resume (Protected) =================

exports.uploadResume = async (req, res) => {

    try {

        const resume = await Resume.create({

            user: req.user._id,

            fileName: req.file.filename,

            filePath: req.file.path

        });

        // AI Analysis
        const review = await analyseResume(req.file.path);

        // Save AI review
        resume.review = review;
        await resume.save();

        res.status(201).json({

            success: true,

            message: "Resume uploaded successfully",

            resume

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Preview Resume (Public) =================

exports.previewResume = async (req, res) => {
    
    try {

        const review = await analyseResume(req.file.path);

        res.status(200).json({

            success: true,

            preview: review

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};