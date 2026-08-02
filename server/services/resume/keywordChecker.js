const technicalSkills = [

"java","python","c","c++","javascript","typescript",

"react","next.js","angular","vue",

"node","express",

"mongodb","mysql","postgresql","firebase",

"docker","kubernetes",

"aws","azure","gcp",

"git","github",

"html","css","bootstrap","tailwind",

"tensorflow","keras","pytorch",

"machine learning","deep learning",

"nlp","computer vision",

"rest api","graphql",

"jwt","oauth",

"redis",

"postman",

"figma",

"linux"

];

exports.checkKeywords=(text)=>{

text=text.toLowerCase();

const matched=[];

const missing=[];

technicalSkills.forEach(skill=>{

if(text.includes(skill))

matched.push(skill);

else

missing.push(skill);

});

let score=Math.round(

(matched.length/technicalSkills.length)*20

);

if(score>20)

score=20;

return{

score,

matched,

missing

};

};