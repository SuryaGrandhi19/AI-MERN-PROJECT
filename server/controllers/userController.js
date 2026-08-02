const User = require("../models/User");


// GET Logged In User

exports.getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.user._id).select("-password");

        res.status(200).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// UPDATE Profile

exports.updateProfile = async (req, res) => {

    try {

        const {
            name,
            githubUrl,
            portfolioUrl
        } = req.body;

        const user = await User.findById(req.user._id);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        user.name = name || user.name;
        user.githubUrl = githubUrl || user.githubUrl;
        user.portfolioUrl = portfolioUrl || user.portfolioUrl;

        await user.save();

        res.status(200).json({
            message: "Profile Updated",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};