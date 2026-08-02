const sections=[

    "education",

    "skills",

    "projects",

    "experience",

    "internship",

    "certification",

    "achievement",

    "summary",

    "profile"

];

exports.checkSections=(text)=>{

    text=text.toLowerCase();

    const found=[];

    const missing=[];

    sections.forEach(section=>{

        if(text.includes(section)){

            found.push(section);

        }

        else{

            missing.push(section);

        }

    });

    const score=Math.round(

        (found.length/sections.length)*20

    );

    return{

        score,

        found,

        missing

    };

};