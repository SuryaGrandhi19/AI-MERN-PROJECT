require("dotenv").config();
const axios = require("axios");


async function listModels(){

    try{

        const response = await axios.get(
            `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
        );


        response.data.models.forEach(model=>{

            console.log(model.name);

        });


    }
    catch(error){

        console.log(error.response.data);

    }

}


listModels();