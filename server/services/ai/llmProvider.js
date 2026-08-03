const axios = require("axios");

const askAI = async (prompt) => {

    try {

        const model =
            process.env.GEMINI_MODEL || "gemini-3.5-flash";


        const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;


        const response = await axios.post(

            url,

            {
                contents:[
                    {
                        parts:[
                            {
                                text:prompt
                            }
                        ]
                    }
                ],

                generationConfig:{
                    temperature:0.2,
                    maxOutputTokens:2000
                }
            },

            {
                headers:{
                    "Content-Type":"application/json"
                },

                timeout:60000
            }

        );


        return response
            .data
            .candidates[0]
            .content
            .parts[0]
            .text;


    }
   catch (error) {

    console.log("========== GEMINI ==========");
    console.log("Code:", error.code);
    console.log("Message:", error.message);
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("============================");

    throw error;
}

};


module.exports = askAI;