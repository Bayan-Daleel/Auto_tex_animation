containerElm= document.querySelector(".container");
const careers=["Youtuber","Developer","Designer","Instructor"]

let careerindex =0;
let charecterIndex=0;
updateText()
function updateText(){
 charecterIndex++;
containerElm.innerHTML=`<h1>I am ${careers[careerindex].slice(0,1)==="I"?"an":"a"} ${careers[careerindex].slice(0,charecterIndex)}</h1>`;
  if(charecterIndex===careers[careerindex].length){
    careerindex++;
    charecterIndex=0;
  }
   if(careerindex===careers.length){
    careerindex=0;
    charecterIndex=0;
  }
  setTimeout(updateText,300);
}