const mongoose=require("mongoose");

const resumeSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    fileName:{
        type:String,
        required:true
    },
    filePath:{
        type:String,
        required:true
    },
    reviewStatus:{
        type:String,
        enum: ["Pending", "Completed"],
        default:"Pending"
    },
    aiReview: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
},
},
{
    timestamps:true
});

module.exports=mongoose.model("Resume",resumeSchema);