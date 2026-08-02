const express=require("express");

const router=express.Router();

const protect=require("../middleware/authMiddleware");

const{reviewResume}=require("../controllers/aiController");

router.post("/review/:id",protect,reviewResume);
module.exports=router;