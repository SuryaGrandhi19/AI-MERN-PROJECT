exports.checkExperience = (text) => {

    let score = 10;

    const remarks = [];

    const lower = text.toLowerCase();

    if (
        !lower.includes("experience") &&
        !lower.includes("internship")
    ) {
        score -= 5;
        remarks.push("Experience section is missing.");
    }

    const years = text.match(/\b(19|20)\d{2}\b/g);

    if (!years || years.length === 0) {
        score -= 2;
        remarks.push("Experience dates are missing.");
    }

    return {
        score,
        remarks
    };
};