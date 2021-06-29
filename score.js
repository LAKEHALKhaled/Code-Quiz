//select the id players where we will create and show the scores
var playerHighScore = document.querySelector("#bestPlayers")
var scores = JSON.parse(localStorage.getItem("scores"))  || []
console.log(playerHighScore);
for(i=0;i<scores.length;i++){
    var score = scores[i];
    var player = document.createElement("li")
    player.setAttribute("class","background")
    player.textContent=score.player + " : " + score.highscore;
    playerHighScore.appendChild(player) 
}

var deleteScore = document.querySelector("#clear")
deleteScore.addEventListener("click",function(){
    console.log("click");
    playerHighScore.textContent = ''
    localStorage.clear()
})

var back = document.querySelector("#go-back")
back.addEventListener("click",function(){
    location.replace("index.html")
})