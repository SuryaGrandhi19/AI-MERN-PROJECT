exports.calculateATS = (

    keyword,

    section,

    contact,

    experience,

    grammar

) => {

    const total =

        keyword.score +

        section.score +

        contact.score +

        experience.score +

        grammar.score;

    let atsScore = Math.round(total);

    if (atsScore > 100)
        atsScore = 100;

    if (atsScore < 0)
        atsScore = 0;

    return atsScore;

};