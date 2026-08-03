const User=require("../models/User");

const bcrypt = require("bcrypt");

const generateToken = require("../utils/generateToken");



// Register User

exports.registerUser = async(req,res)=>{

    try{


        const {
            name,
            email,
            password
        } = req.body;



        const existingUser = await User.findOne({
            email
        });


        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });

        }



        const hashedPassword = await bcrypt.hash(
            password,
            10
        );



        const user = await User.create({

            name,

            email,

            password:hashedPassword

        });



        res.status(201).json({

            message:"Registration successful",

            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }

        });



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};





// Login User

exports.loginUser = async(req,res)=>{

    try{


        const {
            email,
            password
        } = req.body;



        const user = await User.findOne({
            email
        });



        if(!user){

            return res.status(404).json({
                message:"User not found"
            });

        }



        const isMatch = await bcrypt.compare(
            password,
            user.password
        );



        if(!isMatch){

            return res.status(401).json({
                message:"Invalid password"
            });

        }



        const token = generateToken(user._id);



        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });



        res.json({

            message:"Login successful",

            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }

        });



    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};


exports.logoutUser = (req, res) => {

    res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/"
});

    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });

};