const scrapeWebsite = require("./utils/scrapeWebsite");

(async () => {

    const data = await scrapeWebsite(
        "https://murali-portfolio-three.vercel.app/"
    );

    console.log(data);

})();

