
// declaration of Data that will be used for the quiz questions
var questions = [
    {
        title: "What language is used for describing the structure of a Web pages?",
        choices: ["Javascript", "CSS", "HTML", "Express", "Node.js", "React.js"],
        answer: "HTML"
    },
    {
        title: "What language is used for styling a Web pages?",
        choices: ["Matlab", "CSS", "HTML", "BOOTSTRAP", "Node.js", "C++"],
        answer: "CSS"


    },
    {
        title: "What language is used used to create and control dynamic website content?",
        choices: ["Javascript", "Pascal", "HTML", "BOOTSTRAP", "ROS", "React.js"],
        answer: "Javascript"


    },
    {
        title: "A framework directed at responsive, mobile-first front-end web development?",
        choices: ["PHP", "CSS", "C#", "BOOTSTRAP", "SQL", "React.js"],
        answer: "BOOTSTRAP"


    },
    {
        title: "A back-end that runs and executes code outside a web browser?",
        choices: ["Java", "CSS", "MangoDB", "BOOTSTRAP", "Node.js", "React.js"],
        answer: "Node.js"


    },
    {
        title: "A library for building user interfaces or UI components?",
        choices: ["Javascript", "jQuery", "HTML", "BOOTSTRAP", "Vrep", "React.js"],
        answer: "React.js"
    },

]
// qIndex will be used later in the logic to go from question to the next one
var qIndex = 0;

//targetting all the id that we need to use for the application
var startQuiz = document.querySelector("#start")
var time = document.querySelector("#time")
var descriptionPage = document.querySelector("#description")
var endQuiz = document.querySelector("#end-quiz")
var questionsTitle = document.querySelector("#question-title")
var question = document.querySelector("#questions")
var choice = document.querySelector("#choices")
var finalScore = document.querySelector("#final-score")
var addscore = document.querySelector("#submit")
var initials = document.querySelector("#initials")
var timeLeft = time.textContent

//when we click on the submit button to add the score to highscores we need to store data on local storage
addscore.addEventListener("click",function () {
    
    var player = initials.value;
    var highscore = localStorage.getItem("score");
    var playerScore ={player, highscore}
    var highScores = JSON.parse(localStorage.getItem("scores"))  || []
    highScores.push(playerScore)
    localStorage.setItem("scores",JSON.stringify(highScores))
    location.replace("score.html")
})
    

//click the button start quiz will hide the description page and take us through the questions
startQuiz.addEventListener("click", function () {
    descriptionPage.setAttribute("class", "hide")

    
//timer will make sure to run and run function asociated to it
    var seconds = setInterval(function () {
        timeLeft--;
        time.innerHTML = timeLeft;

        if ((timeLeft > 0) && (qIndex < 6)) {
            question.classList.remove("hide");
            firstQ()
        }

        else if((timeLeft > 0) && (qIndex = 6) ){

             // Stops execution of action at set interval
             clearInterval(seconds);
             // Calls function to create and append image
             finalScore.textContent = timeLeft;
             endQuiz.classList.remove("hide");
             question.setAttribute("class", "hide")
             localStorage.setItem("score",timeLeft)
        }


        else if (timeLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(seconds);
            // Calls function to create and append image
            endQuiz.classList.remove("hide");
            finalScore.textContent = 0;
            question.setAttribute("class", "hide")
            
        }


    }, 1000);
})
    //run when timer start and description hide
    function firstQ() {
        questionsTitle.innerHTML = questions[qIndex].title;
    choice.innerHTML = '<ul>' + questions[qIndex].choices.map(function (wiz) {
    return '<li>' + wiz + '</li>';
    }).join(' ') + '</ul>';
    }
    
// when we click on the right question will go to the next otherwise we lose points
choice.addEventListener("click", function (event) {
   
// console.log(event.target.textContent)
console.log(questions[qIndex].answer);
//global variable 
if (questions[qIndex].answer == "HTML"){
    if (event.target.textContent == "HTML") {
        qIndex++
        questionsTitle.innerHTML = questions[1].title;
        choice.innerHTML = '<ul>' + questions[1].choices.map(function (wiz) {
            return '<li>' + wiz + '</li>';
        }).join(' ') + '</ul>';
    }
    else {
        timeLeft = timeLeft - 5
    }
}
else if(questions[qIndex].answer == "CSS"){
    if(event.target.textContent == "CSS"){
        qIndex++
        questionsTitle.innerHTML = questions[2].title;
        choice.innerHTML = '<ul>' + questions[2].choices.map(function (wiz) {
            return '<li>' + wiz + '</li>';
        }).join(' ') + '</ul>';
    }
    else {
        timeLeft = timeLeft - 5
    }
}
else if(questions[qIndex].answer == "Javascript"){
    if(event.target.textContent == "Javascript"){ 
        qIndex++  
        questionsTitle.innerHTML = questions[3].title;
        choice.innerHTML = '<ul>' + questions[3].choices.map(function (wiz) {
            return '<li>' + wiz + '</li>';
        }).join(' ') + '</ul>';
    }
    else {
        timeLeft = timeLeft - 5
    }
}
else if(questions[qIndex].answer=="BOOTSTRAP"){
    if(event.target.textContent == "BOOTSTRAP"){
        qIndex++
        questionsTitle.innerHTML = questions[4].title;
        choice.innerHTML = '<ul>' + questions[4].choices.map(function (wiz) {
            return '<li>' + wiz + '</li>';
        }).join(' ') + '</ul>';
    }
    else {
        timeLeft = timeLeft - 5
    }
}
else if(questions[qIndex].answer=="Node.js"){
    if(event.target.textContent == "Node.js"){
        qIndex++
        questionsTitle.innerHTML = questions[5].title;
        choice.innerHTML = '<ul>' + questions[5].choices.map(function (wiz) {
            return '<li>' + wiz + '</li>';
        }).join(' ') + '</ul>';
    }
    else {
        timeLeft = timeLeft - 5
    }
}   
else{
    if(event.target.textContent == "React.js"){
        qIndex++
        endQuiz.classList.remove("hide");
        question.setAttribute("class", "hide")
        finalScore.textContent = timeLeft;
        console.log(qIndex);
    }
    else {
        timeLeft = timeLeft - 5
    }
}   
})
