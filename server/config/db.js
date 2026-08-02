const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
    const con=await mongoose.connect(process.env.MONGO_URI);
    console.log(`DATABASE CONNECTED:${con.connection.host}`);
    }
    catch(error){
        console.log("Database Not connected",error.message);
        process.exit(1);
        
    }    
};

module.exports=connectDB;