var startquiz = document.getElementById("quizbutton");
var quizbox = document.getElementById("card1");
var questionNumber1 = document.querySelector("#questionNumber");
var questionText = document.querySelector("#question1");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

startquiz.onclick = ()=>{
    start();
}

var questions = [
    {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
];
var score = 0;
var timeLeft = 0;
var timer;
var currentQuestion = -1;

function start(){
    quizbox.style.display = "flex";
    startquiz.style.display = "none";
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        // If timer hits below 0, the game ends
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    
    }, 1000);
    
    next();

};


function next(){
    currentQuestion++;

    if (currentQuestion > questions.length -1){
        
    }
    
    var questiontitle = currentQuestion + 1;
    questionNumber1.textContent = "Question " + questiontitle;
    questionText.textContent = questions[currentQuestion].question
    
    option1.textContent = questions[currentQuestion].options[0];
    option1.value = questions[currentQuestion].options[0];
    option2.textContent = questions[currentQuestion].options[1];
    option2.value = questions[currentQuestion].options[1];
    option3.textContent = questions[currentQuestion].options[2];
    option3.value = questions[currentQuestion].options[2];
    option4.textContent = questions[currentQuestion].options[3];
    option4.value = questions[currentQuestion].options[3];
    
    var answer = questions[currentQuestion].answer;
    

    option1.onclick = ()=>{
        if (option1.value == answer){
            correct();
        }
        else {
            incorrect();
        }
    }

    option2.onclick = ()=>{
        if (option2.value == answer){
            correct();
        }
        else {
            incorrect();
        }
    }

    option3.onclick = ()=>{
        if (option3.value == answer){
            correct();
        }
        else {
            incorrect();
        }
    }

    option4.onclick = ()=>{
        if (option4.value == answer){
            correct();
        }
        else {
            incorrect();
        }
    }
}

function incorrect() {
    timeLeft -=15;
    console.log(currentQuestion);
    next();
}

function correct() {
    console.log(currentQuestion);
    next()
}
