/**
 * Created by Bobby Lin on 27/6/2015.
 */

/** List of questions for quiz */
var allQuestion = [
    {question: "What is the capital city of Italy?", choices: ["Milan","Turin","Venice","Rome"], correctAnswer: 3},
    {question: "Who is the famous disciple of Socrates?", choices: ["Aristotle","Diogenes","Plato","Zeno"], correctAnswer: 2},
    {question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0},
    {question: "In what year was Facebook launched?", choices: ["2008", "2004", "2007", "2005"], correctAnswer: 1},
    {question: "In what year was Google found by Larry Page and Sergey Brin?", choices: ["2000", "2001", "1995", "1998"], correctAnswer: 3},
    {question: "What substance are nails made of?", choices: ["Melanin", "Keratin", "Protein"], correctAnswer: 1}
];

var totalQuestion;
var totalScore;
var start;

startQuiz();

function startQuiz()  {
    totalQuestion = allQuestion.length;
    totalScore = 0;
    start = 0;
    setQuestion(start);
    console.log("Quiz is starting with " + totalQuestion + " questions" );
}

function setQuestion(number) {
    var qnsSet = allQuestion[number];
    var quizForm = document.getElementById("quizform");
    var question = document.createElement("p");
    question.id = "question";
    question.innerText = qnsSet.question;
    quizForm.appendChild(question);

    var choiceArr = qnsSet.choices;
    for(var i = 0; i<choiceArr.length; i++){
        var para = document.createElement("p");
        var ch = document.createElement("input");
        ch.className = "answerText";
        ch.type = "radio";
        ch.value = i;
        ch.name="user_answer";
        var lbl = document.createElement("label");
        lbl.innerText = choiceArr[i];
        para.appendChild(ch);
        para.appendChild(lbl);
        quizForm.appendChild(para);
    }
    var btnNext = document.createElement("button");
    btnNext.innerText = "Next";
    btnNext.id = "btnNext";
    btnNext.onclick = submitAnswer;
    quizForm.appendChild(btnNext);
}

function submitAnswer(){
    var correctAnswer = allQuestion[start].correctAnswer;
    var choices = document.getElementsByName("user_answer");
    for(var i = 0; i<choices.length; i++) {
        if(choices[i].checked && choices[i].value == correctAnswer) {
            alert("You have selected the correct answer");
            totalScore++;
        }
    }
    removeQuestion();
    start++;
    if(start < totalQuestion){
        setQuestion(start);
    }else{
        console.log("Ended");
        endQuiz();
    }
}

function removeQuestion() {
    var quizForm = document.getElementById("quizform");
    while (quizForm.firstChild) {
        quizForm.removeChild(quizForm.firstChild);
    }
}

function endQuiz(){
    var quizForm = document.getElementById("quizform");
    var score = document.createElement("p");
    score.innerText = totalScore + " out of " + totalQuestion;
    quizForm.appendChild(score);
    var btnStartOver = document.createElement("button");
    btnStartOver.innerText = "Try again";
    btnStartOver.onclick = startQuiz;
    quizForm.appendChild(btnStartOver);
}