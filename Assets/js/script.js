var startquiz = document.getElementById("quizbutton");
var quizbox = document.getElementById("card1");

startquiz.addEventListener("click", function(){
    quizbox.style.display = "flex";
    startquiz.style.display = "none";
});