var playingArea=document.querySelector(".playingArea");
var btn=document.querySelector(".btn");
var input=document.querySelector(".playingArea input");
var totalScore=document.querySelector(".totalScore");
var timLiftSpan=document.querySelector(".timLiftSpan");
var h3=document.querySelector(".playingArea h3");
var currScore=document.querySelector(".currScore");
var action=document.querySelector(".action");
var wordIndex;
var Words=["Apple","Car","Cat","Freedom","Basketball","Football","History","Theory","Table","Mouse"];

input.onpaste=function(){
  return false;  
}

function display(){
    btn.style.display="none";
    playingArea.style.display="block";
    input.focus();
    getWord();
    totalScore.innerHTML=Words.length;

}

function getWord(){
    let randomWord=Words[Math.floor(Math.random()*Words.length)];
    h3.innerHTML=randomWord;
    wordIndex=Words.indexOf(randomWord);
    start();


}
function start() {
    timLiftSpan.innerHTML=3;
        let start=setInterval(function(){
            timLiftSpan.innerHTML--;
            if(timLiftSpan.innerHTML<=0){
                clearInterval(start);
                if(input.value.toLowerCase()===h3.innerHTML.toLowerCase()){
                    input.value="";
                    currScore.innerHTML++;
                    Words.splice(wordIndex,1)
                    action.innerHTML="good";
                    action.style.color="#9acd32";
                    if(Words.length>0){
                        getWord();
                        timLiftSpan.innerHTML=3;
                    }
                }
                else{
                    action.innerHTML="Try Again";
                    action.style.color="red";
                    setTimeout(function(){
                        window.location.reload();
                    },1000)
                }
            }
        },1000);    
  }
