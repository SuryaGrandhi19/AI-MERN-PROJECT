exports.checkContact = (text)=>{

    let score = 0;

    const remarks = [];

    const details = {

        email:false,
        phone:false,
        github:false,
        linkedin:false,
        portfolio:false

    };


    const emailRegex =
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;


    const phoneRegex =
    /(\+91)?[6-9][0-9]{9}/;



    if(emailRegex.test(text)){

        score +=4;
        details.email=true;

    }
    else{

        remarks.push("Email address missing.");

    }



    if(phoneRegex.test(text)){

        score +=4;
        details.phone=true;

    }
    else{

        remarks.push("Phone number missing.");

    }



    if(text.toLowerCase().includes("github")){

        score +=4;
        details.github=true;

    }
    else{

        remarks.push("GitHub profile missing.");

    }



    if(text.toLowerCase().includes("linkedin")){

        score +=4;
        details.linkedin=true;

    }
    else{

        remarks.push("LinkedIn profile missing.");

    }



    if(
        text.includes("http") ||
        text.toLowerCase().includes("portfolio")
    ){

        score +=4;
        details.portfolio=true;

    }
    else{

        remarks.push("Portfolio link missing.");

    }


    return {

        score,

        details,

        remarks

    };


};