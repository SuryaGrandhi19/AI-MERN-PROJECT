// const fs = require("fs");
// const pdf = require("pdf-parse");

// const extractText = async (filePath) => {

//     try {

//         console.log("Reading:", filePath);

//         const buffer = fs.readFileSync(filePath);

//         console.log("Buffer Size:", buffer.length);

//         const data = await pdf(buffer);

//         console.log(data.text);

//         return data.text;

//     } catch (error) {

//         console.error("PDF ERROR:");

//         console.error(error);

//         throw error;

//     }

// };

// module.exports = extractText;

const fs = require("fs");
const pdf = require("pdf-parse");

const extractText = async (filePath) => {
    const buffer = fs.readFileSync(filePath);
    const data = await pdf(buffer);
    return data.text;
};

module.exports = extractText;