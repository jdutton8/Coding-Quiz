var questionsList = [
{
    questionText: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Coding Simple Styles", "Creating Silly Songs", "Continuous Sample Styles"],
    correctAnswer: "Cascading Style Sheets",
},

{
    questionText: "Inside which HTML element do we put the JavaScript?",
    answers: ["<javascript>", "<js>", "<script>", "<scripting>"],
    correctAnswer: "<script>",
},

{
    questionText: "Which operator is used to assign a value to a variable?",
    answers: ["=", "-", "*", "x"],
    correctAnswer: "=",
},
]

var question = document.getElementById("questions");
var answers = document.getElementById("answers");
var intro = document.getElementById("intro");
var currentQuestion = 0;
var scores = document.getElementById("scores");
var outro = document.getElementById("outro");

function startQuiz(){
    intro.remove();
    getQuestion();
}

function getQuestion(){
    
    question.textContent = questionsList[currentQuestion].questionText;
    
    for(var i = 0; i < questionsList[currentQuestion].answers.length; i++){
        var btn = document.createElement("button");
         btn.textContent = questionsList[currentQuestion].answers[i];
        answers.appendChild(btn);
        btn.addEventListener('click', checkAnswer);
    }
}

function checkAnswer(e){
    var isCorrectAnswer = e.target.textContent === questionsList[currentQuestion].correctAnswer;
    if(isCorrectAnswer && currentQuestion<questionsList.length-1){
        currentQuestion++;
        
            
        answers.replaceChildren();
        
        getQuestion();
    }
    else if(isCorrectAnswer && currentQuestion === questionsList.length-1){
        answers.remove();
        question.remove();
        setHighScore();
    }
    else{
        e.target.style.color="red";
    }
}

function setHighScore(){
    var title = document.createElement("h1");
    title.textContent = "Enter Your Initials";
    outro.appendChild(title);
    var savedScore = document.createElement("p");
    savedScore.textContent = localStorage.getItem('score');
    scores.appendChild(savedScore);
    var newScore = document.createElement("input");
    scores.appendChild(newScore);
    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    outro.appendChild(saveBtn);
    saveBtn.addEventListener('click', saveToStorage);
}

function saveToStorage(){
    var initials = document.getElementsByTagName("input")[0].value;
    localStorage.setItem('score', initials);
}

document.getElementById("start").addEventListener('click', startQuiz);