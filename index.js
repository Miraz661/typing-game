let txt =["hello","lorem" ,"ipsum", "dolor", "sit", "amet ","consectetur", "adipisicing", "elit", "Soluta", "laudantium", "labore", "nemo", "maiores", "deserunt", "numquam", "perferendis", "itaque", "consequuntur", "consectetur", "et", "at", "nam", "quasi", "quiquis", "Harum", "atque", "quo", "nemo", "voluptate", "illum", "Dolore", "quas", "Tenetur", "ea", "ex", "maxime", "illo", "ab", "modi", "corrupti", "quae", "pariatur", "temporibus", "vitae", "architecto", "iure voluptates", "ipsum", "saepe"];
let len=txt.length;
let curword;
let score=0;
let isplay=0;
let tim=5;
let indexnum = 0;


const timeLeft=document.querySelector("#time");
const _score = document.querySelector("#scores");
const currentwd = document.querySelector("#corrent-text");
const showresult = document.querySelector("#massage");
const showword = document.querySelector(".current-word");
const reset = document.querySelector("#restart");


document.addEventListener("DOMContentLoaded",()=>{
    tim=5;
})

currentwd.onkeyup=()=>{
    curword=currentwd.value;
}




function result(){
    if(curword===txt[indexnum]){
        score++;
        _score.innerHTML=score;
        showresult.innerHTML="Correct !!";
        currentwd.value="";
    }else if(isplay>=4){
        isplay=0;
        score=0;
        showresult.innerHTML="Game over !";
        currentwd.disabled=true;
        currentwd.style.color="white";
        clearInterval(countInterval);
        reset.style.display="block";

    }else{
        isplay++;
        showresult.innerHTML="Worng !!";
        currentwd.value="";
    }
    indexnum = Math.floor(Math.random()*len);
    showword.innerHTML=txt[indexnum];
}

    let countInterval=setInterval(timecounter, 1000);
function timecounter(){
    timeLeft.innerHTML=tim;
    tim--;
    if(tim==-1){
        tim=5;
        result();
    }
}


function resetGame(){
    reset.style.display="none";
    currentwd.disabled=false;
    currentwd.focus();
    currentwd.style.color="black";
    showresult.innerHTML="";
    score=0;
    isplay=0;
    tim=5;
    indexnum = 0;
    showword.innerHTML=txt[indexnum];
    _score.innerHTML=score;
    currentwd.value="";
    countInterval=setInterval(timecounter, 1000);
}
