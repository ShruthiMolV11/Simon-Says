let gameSeq=[]; 
let userSeq=[];
let h2=document.querySelector("h2");
let higestScore=0;
let playerScore=0;

let started=false;
let level=0;

let btns=["red","yellow","blue","pistachio"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelUp();
});

// Flash
function gameFlash(box){
    box.classList.add("gflash");
    setTimeout(function(){
        box.classList.remove("gflash");
    },300);
}

// levelUp
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=(`level ${level}`);

    let ranInd=Math.floor(Math.random()*4);
    let randCol=btns[ranInd];
    let ranBtn=document.querySelector(`.${randCol}`);

    gameSeq.push(randCol);
    // console.log(gameSeq);

    gameFlash(ranBtn);
}

function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your Score was <b>${level}</b><br>Highest Score was ${higestScore}<br>Press any key to start Over`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        if(higestScore<level){
            higestScore=level;
        }
        reset();
    }
}

// user press
function btnPress(){
    
    let btn=this;
    gameFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length-1);
}

let allbox=document.querySelectorAll(".box");
for(abox of allbox){
    abox.addEventListener("click",btnPress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}