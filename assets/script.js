// Variables used to target elements in HTML
const quizBox = document.getElementById("quizbox");
const solutions = document.getElementById("solutions");
const timerEL = document.getElementById("time-remaining");
let mainContainer = document.getElementById("quizbox");
let timer = document.getElementById("timer");
let results = document.getElementById("results");
let scores = document.getElementById("scores");
let viewScores = document.getElementById("view-scores");
let restartButton = document.getElementById("restart-button");
let clearScores = document.getElementById("clear-scores");

// Sets initial structure on page load
window.onload = function intro() {
  document.getElementById(
    "instructions"
  ).innerHTML = `<style="position=relative width:50%">You have one minute to complete a set of five questions. For every wrong
answer, fifteen seconds will be deducted from your time remaining. <br></br>Click
the button below to get started!`;
  document.getElementById("title").innerHTML = `Welcome to Quiztime!`;
  document.getElementById("go").innerHTML = `Lets Get Started!`;
  document.getElementById("view").innerHTML = `View High Scores`;
};

// Starting time to complete the quiz
let sec = 60;

// Hides the endpage at page open
let endpage = document.getElementById("endpage");
endpage.style.display = "none";

// View high scores button
document.getElementById("view").addEventListener("click", scoreBoard);

// Clear high scores button
document.getElementById("clear-scores").addEventListener("click", function () {
  localStorage.clear();
  sessionStorage.clear();
  document.getElementById("scores").innerHTML = ``;
});

// Restart Button
document.getElementById("restart-button").addEventListener("click", () => {
  endpage.style.display = "none";
  mainContainer.style.display = "block";
  timer.style.display = "block";
  results.style.display = "block";
  viewScores.style.display = "block";
  clearInterval(timer);
  document.querySelector("main").innerHTML = ``;
  startOver();
});

// Button to start the timer
document.getElementById("go").addEventListener("click", startTimer);

// Starts, reveals, and declinates the timer, then starts the quiz
function startTimer() {
  document.getElementById("timer").style.display = "block";
  document.getElementById("time-remaining").innerHTML = `60`;
  score = 0;
  sec = 60;
  let timer = setInterval(function () {
    document.getElementById("time-remaining").innerHTML = `<h2></h2>` + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      scoreBoard();
      return;
    }
  }, 1000);
  startQuiz();
  viewScores.style.display = "none";
}

// Creates the first question, with 4 possible answers
function startQuiz() {
  document.querySelector(
    "main"
  ).innerHTML = `<h1>JavaScript is a ___ -side programming language.</h1>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" id="c1"> Both </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1"> Client </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1"> Server </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1"> None </label>` +
    `<br></br>`;

  //Adds responsiveness to the potential choices
  const firstAnswer = document.querySelectorAll('[name="group1"]');
  for (let i = 0; i < firstAnswer.length; i++) {
    firstAnswer[i].addEventListener("click", () => {
      wrong1();
      secondQ();
      timerLoss();
    });

    // Responds to the user's input
    function wrong1() {
      document.getElementById("results").innerHTML = `<p>Wrong!</p>`;
    }

    document.getElementById("c1").onclick = function () {
      document.getElementById("results").innerHTML = `<p>Correct!</p>`;
      score += 1;
      // console.log(score);
      secondQ();
    };
    // Causes the results declaration to fade after 2 seconds
    setTimeout(() => {
      document.getElementById("results").innerHTML = ``;
    }, 2000);
  }
}

// Creates the second question, with 4 possible answers
function secondQ() {
  document.querySelector(
    "main"
  ).innerHTML = `<h1>Which of the following will write the message “Hello DataFlair!” in an alert box?</h1>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1">alertBox(“Hello DataFlair!”);</label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1">alert(Hello DataFlair!);</label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" id="c1">alert(“Hello DataFlair!”);</label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1">msgAlert(“Hello DataFlair!”);</label>` +
    `<br></br>`;

  //Adds responsiveness to the choices
  const firstAnswer = document.querySelectorAll('[name="group1"]');
  for (let i = 0; i < firstAnswer.length; i++) {
    firstAnswer[i].addEventListener("click", () => {
      wrong1();
      thirdQ();
      timerLoss();
    });

    // Responds to the user's input
    function wrong1() {
      document.getElementById("results").innerHTML = `<p>Wrong!</p>`;
    }
    document.getElementById("c1").onclick = function () {
      document.getElementById("results").innerHTML = `<p>Correct!</p>`;
      score += 1;
      // console.log(score);
      thirdQ();
    };
    // Causes the results declaration to fade after 2 seconds
    setTimeout(() => {
      document.getElementById("results").innerHTML = ``;
    }, 2000);
  }
}

// Creates the third question, with 4 possible answers
function thirdQ() {
  document.querySelector(
    "main"
  ).innerHTML = `<h1>How do you find the minimum of x and y using JavaScript?</h1>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1">min(x,y);</label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" id="c1">Math.min(x,y)</label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1">Math.min(xy)</label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1">min(xy);</label>` +
    `<br></br>`;

  //Adds responsiveness to the potential choices
  const firstAnswer = document.querySelectorAll('[name="group1"]');
  for (let i = 0; i < firstAnswer.length; i++) {
    firstAnswer[i].addEventListener("click", () => {
      wrong1();
      fourthQ();
      timerLoss();
    });

    // Responds to the user's input
    function wrong1() {
      document.getElementById("results").innerHTML = `<p>Wrong!</p>`;
    }
    document.getElementById("c1").onclick = function () {
      document.getElementById("results").innerHTML = `<p>Correct!</p>`;
      score += 1;
      // console.log(score);
      fourthQ();
    };
    // Causes the results declaration to fade after 2 seconds
    setTimeout(() => {
      document.getElementById("results").innerHTML = ``;
    }, 2000);
  }
}

// Creates the fourth question, with 4 possible answers
function fourthQ() {
  document.querySelector(
    "main"
  ).innerHTML = `<h1>What is the correct “if” statement to execute certain code if “x” is equal to 2?</h1>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1"> if(x 2) </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1"> if(x = 2) </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" name="group1" class="w1"> if(x != 2 ) </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%"> <input type="radio" id="c1">  if(x == 2) </label>` +
    `<br></br>`;

  //Adds responsiveness to the potential choices
  const firstAnswer = document.querySelectorAll('[name="group1"]');
  for (let i = 0; i < firstAnswer.length; i++) {
    firstAnswer[i].addEventListener("click", () => {
      wrong1();
      fifthQ();
      timerLoss();
    });

    // Responds to the user's input
    function wrong1() {
      document.getElementById("results").innerHTML = `<p>Wrong!</p>`;
    }
    document.getElementById("c1").onclick = function () {
      document.getElementById("results").innerHTML = `<p>Correct!</p>`;
      score += 1;
      // console.log(score);
      fifthQ();
    };
    // Causes the results declaration to fade after 2 seconds
    setTimeout(() => {
      document.getElementById("results").innerHTML = ``;
    }, 2000);
  }
}

// Creates the final, fifth question, with 4 possible answers
function fifthQ() {
  document.querySelector(
    "main"
  ).innerHTML = `<h1>Which of the following statements will throw an error?</h1>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> var fun = function bar( ){ } </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%" id="c1"> <input type="radio"> var fun = function bar{ } </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> function fun( ){ } </label>` +
    `<br></br>`;
  document.querySelector("main").innerHTML +=
    `<label style="margin-left:30%" class="w1"> <input type="radio" name="group1"> function () {}</label>` +
    `<br></br>`;

  //Adds responsiveness to the potential choices
  const firstAnswer = document.querySelectorAll('[name="group1"]');
  for (let i = 0; i < firstAnswer.length; i++) {
    firstAnswer[i].addEventListener("click", () => {
      wrong1();
      timerLoss();
    });

    // Responds to the user's input and keeps score
    function wrong1() {
      document.getElementById("results").innerHTML = `<p>Wrong!</p>`;
    }
    document.getElementById("c1").onclick = function () {
      document.getElementById("results").innerHTML = `<p>Correct!</p>`;
      score += 1;
      // console.log(score);
      scoreBoard();
    };
    // Causes the results declaration to fade after 2 seconds
    setTimeout(() => {
      document.getElementById("results").innerHTML = ``;
    }, 2000);
  }
}

// Subtracts time from the timer for an incorrect answer
function timerLoss() {
  sec = sec - 15;
}
// Reveals the endpage, hides the rest of the page, and creates the submit button
function scoreBoard() {
  clearInterval(timer);
  endpage.style.display = "block";
  mainContainer.style.display = "none";
  timer.style.display = "none";
  results.style.display = "none";
  viewScores.style.display = "none";
  let nameBox = document.getElementById("nameBox");
  let submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function () {
    window.localStorage.setItem("name", nameBox.value);
    populate();
    return;
  });
}

// Creates and populates the scoreboard
function populate() {
  let listItem = document.createElement("li");
  listItem.textContent = localStorage.getItem("name") + "     " + score;
  scores.appendChild(listItem);
  return;
}

// Resets the quiz to its starting position
function startOver() {
  document.querySelector(
    "main"
  ).innerHTML = `<h1 id="title">Welcome to Quiztime!</h1>`;
  document.querySelector(
    "main"
  ).innerHTML += `<p id="instructions" style="position=relative width:50%">You have one minute to complete a set of five questions. For every wrong
  answer, fifteen seconds will be deducted from your time remaining. <br></br>Click
  the button below to get started!</p>`;
  document.querySelector(
    "main"
  ).innerHTML += `<button id="go">Lets Get Started!</button>`;
  document.querySelector("main").innerHTML += `<div id="view-scores"></div>`;
  document.getElementById(
    "view-scores"
  ).innerHTML += `<button id="view">View High Scores</button>`;
  document.getElementById("view").addEventListener("click", scoreBoard);
  document.getElementById("go").addEventListener("click", startTimer);
  document.getElementById("timer").style.display = "none";
}
