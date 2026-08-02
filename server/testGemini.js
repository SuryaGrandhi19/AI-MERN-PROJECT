require("dotenv").config();

const askAI = require("./services/ai/llmProvider");

(async () => {

    try {

        const response = await askAI("Say Hello");

        console.log(response);

    } catch (error) {

        console.error(error);

    }

})();