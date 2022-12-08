//screens
let mainScreen=document.getElementById("main-screen");
let redScreen=document.getElementById("red-screen");
let greenScreen=document.getElementById("green-screen");
let endScreen=document.getElementById("end-screen");
//playagain btn
let playAgain=document.getElementById("play-again");
//print time section  
let printTime=document.getElementById("time");

mainScreen.addEventListener("click",function(){
  mainScreen.style.display="none";
  redScreen.style.display="flex";
  handleGreenScreen();
});

function handleGreenScreen(){
  //get random milisecond to show green screen
  let randomTime=Math.ceil(Math.random()*4000);
  console.log(randomTime);
  let createdTime;
  let showGreenScreen=setTimeout(function(){
    redScreen.style.display="none";
    greenScreen.style.display="flex";
    createdTime=new Date;
  },randomTime);

  // handel click on green screen
  greenScreen.addEventListener("click",function(){
    greenScreen.style.display="none";
    endScreen.style.display="flex";
    calculateTime(createdTime);
    clearTimeout(showGreenScreen);
  });
}
//calculate time
function calculateTime(timeShowingScreen){
const date =new Date();
let timePressingScreen=Math.abs(date-timeShowingScreen);
printTime.innerHTML=(timePressingScreen/1000).toFixed(3)+" SEC"

}
// handle play again button
playAgain.addEventListener("click",function(){
  mainScreen.style.display="flex";
  redScreen.style.display="none";
  greenScreen.style.display="none";
  endScreen.style.display="none";
});
