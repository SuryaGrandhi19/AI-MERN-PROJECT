const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    portfolioUrl:{
        type:String,
        required:true
    },

    review:{
        overallScore:Number,
        uiUxScore:Number,
        contentScore:Number,
        seoScore:Number,

        strengths:[String],

        weaknesses:[String],

        suggestions:[String]
    }

},{
    timestamps:true
});

module.exports = mongoose.model(
    "Portfolio",
    portfolioSchema
);