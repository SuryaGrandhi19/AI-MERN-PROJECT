const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
    uploadResume,
    previewResume
} = require("../controllers/resumeController");

// Public Preview
router.post(
    "/preview",
    upload.single("resume"),
    previewResume
);

// Protected Upload + Full Review
router.post(
    "/upload",
    protect,
    upload.single("resume"),
    uploadResume
);

module.exports = router;