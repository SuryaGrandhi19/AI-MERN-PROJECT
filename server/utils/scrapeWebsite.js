const { chromium } = require("playwright");

const scrapeWebsite = async (url) => {

    const browser = await chromium.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage"
        ]
    });

    try {

        const page = await browser.newPage();

        await page.goto(url, {
            waitUntil: "networkidle",
            timeout: 60000
        });

        await page.waitForTimeout(3000);

        const data = await page.evaluate(() => {

            const getText = (selector) =>
                [...document.querySelectorAll(selector)]
                    .map(el => el.innerText.trim())
                    .filter(Boolean);

            return {

                title: document.title,

                description:
                    document.querySelector('meta[name="description"]')
                        ?.content || "",

                headings: getText("h1,h2,h3,h4,h5,h6"),

                paragraphs: getText("p"),

                links: [...document.links].map(link => ({
                    text: link.innerText,
                    href: link.href
                })),

                images: [...document.images].map(img => ({
                    src: img.src,
                    alt: img.alt
                })),

                bodyText: document.body.innerText

            };

        });

        return data;

    } finally {

        await browser.close();

    }

};

module.exports = scrapeWebsite;




// const axios = require("axios");
// const cheerio = require("cheerio");


// const scrapeWebsite = async (url) => {

//     try {

//         const response = await axios.get(url, {
//             headers: {
//                 "User-Agent":
//                 "Mozilla/5.0"
//             },
//             timeout: 30000
//         });


//         const html = response.data;


//         const $ = cheerio.load(html);


//         const getText = (selector) => {

//             return $(selector)
//                 .map((i, el) =>
//                     $(el)
//                     .text()
//                     .trim()
//                 )
//                 .get()
//                 .filter(Boolean);

//         };


//         return {

//             title:
//             $("title").text(),

//             description:
//             $('meta[name="description"]')
//             .attr("content") || "",


//             headings:
//             getText(
//                 "h1,h2,h3,h4,h5,h6"
//             ),


//             paragraphs:
//             getText("p"),


//             links:
//             $("a")
//             .map((i,el)=>({

//                 text:
//                 $(el)
//                 .text()
//                 .trim(),

//                 href:
//                 $(el)
//                 .attr("href")

//             }))
//             .get(),


//             images:
//             $("img")
//             .map((i,el)=>({

//                 src:
//                 $(el)
//                 .attr("src"),

//                 alt:
//                 $(el)
//                 .attr("alt") || ""

//             }))
//             .get(),


//             bodyText:
//             $("body")
//             .text()
//             .replace(/\s+/g," ")
//             .trim()

//         };


//     }
//     catch(error){

//         throw new Error(
//             "Unable to scrape portfolio website"
//         );

//     }

// };


// module.exports = scrapeWebsite;