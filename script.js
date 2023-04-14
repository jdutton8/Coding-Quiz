var questionsList = [
{
    questionText: "What does CSS stand for?",
    answers: ["Cascading Style Sheets", "Coding Simple Styles", "Creating Silly Songs", "Continuous Sample Styles"],
    correctAnswer: "Cascading Style Sheets",
},

{
    questionText: "Inside which HTML element do we put the JavaScritp?",
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



function getQuestion(){
    question.textContent = questionsList[0].questionText;
    for(var i = 0; i < questionsList[0].answers.length; i++){
        var btn = document.createElement("button");
         btn.textContent = questionsList[0].answers[i];
        answers.appendChild(btn);
    }
}

document.getElementById("start").addEventListener('click', getQuestion());