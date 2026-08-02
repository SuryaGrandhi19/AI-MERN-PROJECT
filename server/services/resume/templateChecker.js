exports.checkTemplate=(text)=>{

let score=20;

const remarks=[];

const lines=text.split("\n");

if(lines.length<20){

score-=5;

remarks.push(

"Resume looks too short"

);

}

if(text.length>8000){

score-=3;

remarks.push(

"Resume is too lengthy"

);

}

if(/\t/.test(text)){

score-=2;

remarks.push(

"Tables detected"

);

}

if(/image/i.test(text)){

score-=2;

remarks.push(

"Images may affect ATS"

);

}

if(score<0)

score=0;

return{

score,

remarks

};

};