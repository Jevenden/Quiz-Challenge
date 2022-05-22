// Variables used to target elements in HTML
const quizBox = document.getElementById('quizbox');
const solutions = document.getElementById('solutions');
const timerEL = document.getElementById('time-remaining');
document.getElementById("go").addEventListener("click", startTimer);

function startQuiz() {
    document.querySelector("main").innerHTML = `<h1>Question: "question one"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;

    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            secondQ();
            timerLoss()
       });
    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
    
    document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;}
}}

function secondQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question two"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c2"> <input type="radio" name="group2"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group2"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group2"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group2"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    const secondAnswer = document.querySelectorAll('[name="group2"]');
    for (let i = 0; i < secondAnswer.length; i++) {
        secondAnswer[i].addEventListener("click", thirdQ);
}}

function thirdQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question three"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c3"> <input type="radio" name="group3"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group3"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group3"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group3"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    const thirdAnswer = document.querySelectorAll('[name="group3"]');
    for (let i = 0; i < thirdAnswer.length; i++) {
        thirdAnswer[i].addEventListener("click", fourthQ);
}}

function fourthQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question four"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c4"> <input type="radio" name="group4"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group4"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group4"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group4"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    const fourthAnswer = document.querySelectorAll('[name="group4"]');
    for (let i = 0; i < fourthAnswer.length; i++) {
        fourthAnswer[i].addEventListener("click", fifthQ);
}}

function fifthQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question five"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c5"> <input type="radio" name="group5"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group5"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group5"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="w1"> <input type="radio" name="group5"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    const fifthAnswer = document.querySelectorAll('[name="group5"]');
    for (let i = 0; i < fifthAnswer.length; i++) {
        fifththAnswer[i].addEventListener("click", fifthQ);
}}

// function startQuiz(){
//     let catcher = [];
//     quizQuestions.forEach(
//         function (currentQuestion, questionNumber) {
//             const answers = [];
//             for(letter in currentQuestion.answers){
//                 answers.push(
//                     `<label>
//                         <input type="radio" name="question${questionNumber}" value="${letter}">
//                         ${letter} :
//                         ${currentQuestion.answers[letter]}
//                     </label>`
//                 );
//             }
//             catcher.push(
//                 `<div class="question"> ${currentQuestion.question} </div>
//                 <div class="answers"> ${answers.join('')} </div>`
//             );
//         }
//     );
//     quizBox.innerHTML = catcher.join('');
// };


// Quiz questions stored in an object
// const quizQuestions = [
//     {
//         Question: "Blah blah question one",
//         Answers: {
//             A: "blah blah",
//             B: "blah blah",
//             C: "blah blah",
//             D: "blah blah",
//         },
//         correctAnswer: "B"
//     },
//     {
//         Question: "Blah blah question two",
//         Answers: {
//             A: "blah blah",
//             B: "blah blah",
//             C: "blah blah",
//             D: "blah blah",
//         },
//         correctAnswer: "B"
//     },
//     {
//         Question: "Blah blah question three",
//         Answers: {
//             A: "blah blah",
//             B: "blah blah",
//             C: "blah blah",
//             D: "blah blah",
//         },
//         correctAnswer: "B"
//     },
//     {
//         Question: "Blah blah question four",
//         Answers: {
//             A: "blah blah",
//             B: "blah blah",
//             C: "blah blah",
//             D: "blah blah",
//         },
//         correctAnswer: "B"
//     },
//     {
//         Question: "Blah blah question five",
//         Answers: {
//             A: "blah blah",
//             B: "blah blah",
//             C: "blah blah",
//             D: "blah blah",
//         },
//         correctAnswer: "B"
//     }
// ];




function showAnswers(){}


function timerLoss() {
    sec = sec -10;
}
let sec = 60

// Starts and declinates the timer
function startTimer() {
    document.getElementById("timer").style.visibility = "visible";
    document.getElementById("time-remaining").innerHTML = `60`;
    let timer = setInterval(function(){
        document.getElementById("time-remaining").innerHTML=`<h2></h2>`+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
startQuiz()
}