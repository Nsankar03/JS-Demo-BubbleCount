let score=0;

document.getElementById("bubble_button").onclick = function(){
    score+=5;
    document.getElementById("score").innerHTML=score;
    document.getElementById("bubble_button").style.display="none";
    setTimeout(()=>{
        document.getElementById("bubble_button").style.display="block";
    },200)
}

document.getElementById("reset").onclick = function(){
    score=0;
    document.getElementById("score").innerHTML=score;
}