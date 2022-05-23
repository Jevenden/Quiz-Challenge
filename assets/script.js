// Variables used to target elements in HTML
const quizBox = document.getElementById('quizbox');
const solutions = document.getElementById('solutions');
const timerEL = document.getElementById('time-remaining');
document.getElementById("go").addEventListener("click", startTimer);
let score = 0;

function startQuiz() {
    document.querySelector("main").innerHTML = `<h1>Question: "question one"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
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
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        secondQ()
    }
}}

function secondQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question two"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;

    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            thirdQ();
            timerLoss()
       });

    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        thirdQ()
    }
}}

function thirdQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question three"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;

    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            fourthQ();
            timerLoss()
       });

    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}

        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        fourthQ()
    }
}}

function fourthQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question four"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> bloop bloop bloop bloop</label>`+ `<br></br>`;

    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            fifthQ();
            timerLoss()
       });

    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        fifthQ()
    }
}}

function fifthQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question four"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> bloop bloop bloop bloop</label>`+ `<br></br>`;

    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            scoreboard();
            timerLoss()
       });

    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        scoreboard()
    }
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
            scoreboard()
        }
    }, 1000);
startQuiz()
}

let endpage = document.getElementById("endpage");
endpage.style.display= "none";

let mainContainer = document.getElementById("quizbox");

let timer = document.getElementById("timer");
let results = document.getElementById("results");

let scores = document.getElementById("scores");

function scoreboard() {
    endpage.style.display = "block"
    mainContainer.style.display = "none";
    timer.style.display = "none";
    results.style.display = "none";
    let initial = document.getElementById("initial");
    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault()
        console.log(initial.value)
        localStorage.setItem("score", initial.value)
        getItems()
    })
}

function getItems() {
    for (i=0; i<localStorage.length; i++) {
        let listItem = document.createElement("li")
        listItem.textContent = localStorage.getItem("score")
        scores.appendChild(listItem)
    }
}