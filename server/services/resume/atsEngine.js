const {checkKeywords}=require("./keywordChecker");

const {checkSections}=require("./sectionChecker");

const {checkContact}=require("./contactChecker");

const {checkExperience}=require("./experienceChecker");

const {checkGrammar}=require("./grammarChecker");

const {checkTemplate}=require("./templateChecker");


exports.analyseATS=(text)=>{


const keyword = checkKeywords(text);


const section = checkSections(text);


const contact = checkContact(text);


const experience = checkExperience(text);


const grammar = checkGrammar(text);


const template = checkTemplate(text);



const totalScore =

keyword.score +
section.score +
contact.score +
experience.score +
grammar.score +
template.score;



const atsScore = Math.min(

Math.round((totalScore/100)*100),

100

);



return {


atsScore,


keyword,


section,


contact,


experience,


grammar,


template


};


};