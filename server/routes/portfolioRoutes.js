const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    reviewPortfolio,
    previewPortfolio
} = require("../controllers/portfolioController");

// Public Preview
router.post("/preview", previewPortfolio);

// Protected Full Review
router.post("/review", protect, reviewPortfolio);

module.exports = router;