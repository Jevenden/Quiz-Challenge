// To-Do
// -Get scores to show up
// -Add CSS for prettiness
// -Add a clear high scores button
// -Write real questions/answers

// Variables used to target elements in HTML
const quizBox = document.getElementById('quizbox');
const solutions = document.getElementById('solutions');
const timerEL = document.getElementById('time-remaining');
let mainContainer = document.getElementById("quizbox");
let timer = document.getElementById("timer");
let results = document.getElementById("results");
let scores = document.getElementById("scores");

// Button to start the timer
document.getElementById("go").addEventListener("click", startTimer);

// Starting Score
let score = 0;

// Creates the first question, with 4 possible answers
function startQuiz() {
    document.querySelector("main").innerHTML = `<h1>Question: "question one"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> correct</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;

//Adds responsiveness to the potential choices
    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            secondQ();
            timerLoss();
       });

// Responds to the user's input
    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        secondQ()
    }
    setTimeout(() => {
        document.getElementById("results").innerHTML=``;
      }, 2000)
}}



// Creates the second question, with 4 possible answers
function secondQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question two"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> correct</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;

//Adds responsiveness to the choices
    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            thirdQ();
            timerLoss()
       });

// Responds to the user's input
    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        thirdQ()
    }
    setTimeout(() => {
        document.getElementById("results").innerHTML=``;
      }, 2000)
}}

// Creates the third question, with 4 possible answers
function thirdQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question three"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> correct</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;

//Adds responsiveness to the potential choices
    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            fourthQ();
            timerLoss()
       });

// Responds to the user's input
    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        fourthQ()
    }
    setTimeout(() => {
        document.getElementById("results").innerHTML=``;
      }, 2000)
}}

// Creates the fourth question, with 4 possible answers
function fourthQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question four"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> correct</label>`+ `<br></br>`;

//Adds responsiveness to the potential choices
    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            fifthQ();
            timerLoss()
       });

// Responds to the user's input
    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        fifthQ()
    }
    setTimeout(() => {
        document.getElementById("results").innerHTML=``;
      }, 2000)
}}

// Creates the final, fifth question, with 4 possible answers
function fifthQ() {
    document.querySelector("main").innerHTML = `<h1>Question: "question five"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" id="c1"> <input type="radio"> correct</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> wrong</label>`+ `<br></br>`;

//Adds responsiveness to the potential choices
    const firstAnswer = document.querySelectorAll('[name="group1"]');
    for (let i = 0; i < firstAnswer.length; i++) {
        firstAnswer[i].addEventListener("click", () => {    
            wrong1();
            scoreboard();
            timerLoss()
       });

// Responds to the user's input and keeps score
    function wrong1 () {
        document.getElementById("results").innerHTML = `<p>Wrong!</p>`;}
        document.getElementById('c1').onclick = function() {
        document.getElementById("results").innerHTML = `<p>Correct!</p>`;
        score += 1;
        console.log(score);
        scoreboard()
    }
    setTimeout(() => {
        document.getElementById("results").innerHTML=``;
      }, 2000)
}}

// Subtracts time from the timer for an incorrect answer
function timerLoss() {
    sec = sec -15;
}
let sec = 60

// Starts and declinates the timer, then starts the quiz
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

// Hides the endpage at page open
let endpage = document.getElementById("endpage");
endpage.style.display= "none";

// Reveals the endpage, hides the rest of the page, and creates the submit button
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

// Creates and populates the scoreboard
function getItems() {
    for (i=0; i<localStorage.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = localStorage.getItem("score");
        scores.appendChild(listItem);
    }
}