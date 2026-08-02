exports.checkGrammar = (text) => {

    let score = 20;

    const remarks = [];

    const words = text.split(/\s+/);

    // Very short resume
    if (words.length < 250) {
        score -= 5;
        remarks.push("Resume content is too short.");
    }

    // Long resume
    if (words.length > 1200) {
        score -= 3;
        remarks.push("Resume is too lengthy.");
    }

    // Multiple spaces
    if (/\s{3,}/.test(text)) {
        score -= 2;
        remarks.push("Too many unnecessary spaces.");
    }

    // Too many blank lines
    if (/\n{4,}/.test(text)) {
        score -= 2;
        remarks.push("Formatting contains excessive blank lines.");
    }

    if (score < 0) score = 0;

    return {

        score,

        remarks

    };

};