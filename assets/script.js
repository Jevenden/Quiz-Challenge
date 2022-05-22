// Variables used to target elements in HTML
const quizBox = document.getElementById('quizbox');
const solutions = document.getElementById('solutions');
const timerEL = document.getElementById('time-remaining');
document.getElementById("go").addEventListener("click", startTimer);

function startQuiz() {
    document.querySelector("main").innerHTML = `<h1>Question: "Blah blah question one"</h1>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
    document.querySelector("main").innerHTML += `<label style="margin-left:30%"> <input type="radio" name="group1"> blah blah blah blah bllah blah</label>`+ `<br></br>`;
}

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
const quizQuestions = [
    {
        Question: "Blah blah question one",
        Answers: {
            A: "blah blah",
            B: "blah blah",
            C: "blah blah",
            D: "blah blah",
        },
        correctAnswer: "B"
    },
    {
        Question: "Blah blah question two",
        Answers: {
            A: "blah blah",
            B: "blah blah",
            C: "blah blah",
            D: "blah blah",
        },
        correctAnswer: "B"
    },
    {
        Question: "Blah blah question three",
        Answers: {
            A: "blah blah",
            B: "blah blah",
            C: "blah blah",
            D: "blah blah",
        },
        correctAnswer: "B"
    },
    {
        Question: "Blah blah question four",
        Answers: {
            A: "blah blah",
            B: "blah blah",
            C: "blah blah",
            D: "blah blah",
        },
        correctAnswer: "B"
    },
    {
        Question: "Blah blah question five",
        Answers: {
            A: "blah blah",
            B: "blah blah",
            C: "blah blah",
            D: "blah blah",
        },
        correctAnswer: "B"
    }
];




function showAnswers(){}




// Starts and declinates the timer
function startTimer() {
    document.getElementById("timer").style.visibility = "visible";
    document.getElementById("time-remaining").innerHTML = `30`;
    let sec = 30;
    let timer = setInterval(function(){
        document.getElementById("time-remaining").innerHTML=`<h2></h2>`+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
startQuiz()
}