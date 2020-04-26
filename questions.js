var questions = [
  {
    title: "What is the capitol of California?",
    choices: ["A. Sacramento", "B. Phoenix", "C. Los Angeles", "D. San Diego"],
    answer: 0,
  },
  {
    title: "What is the capitol of Texas?",
    choices: ["A. Sacramento", "B. Phoenix", "C. Los Angeles", "D. Austin"],
    answer: 3,
  },

  {
    title: "What is the capitol of Arizona?",
    choices: ["A. Sacramento", "B. Phoenix", "C. Los Angeles", "D. San Diego"],
    answer: 1,
  },

  {
    title: "What is the capitol of Washington State?",
    choices: ["A. Sacramento", "B. Phoenix", "C. Seattle", "D. Olympia"],
    answer: 3,
  },

  {
    title: "What is the capitol of Nevada?",
    choices: ["A. Sacramento", "B. Phoenix", "C. Carson City", "D. Las Vegas"],
    answer: 2,
  },
];

var currentQuestion = 0;
window.score = 0;

function displayQuestion() {
  document.getElementById("question").innerHTML =
    questions[currentQuestion].title;
  for (var i = 0; i < questions[currentQuestion].choices.length; i += 1) {
    var button = document.createElement("button");
    button.type = "button";
    button.value = i;
    button.innerHTML = questions[currentQuestion].choices[i];
    button.addEventListener("click", function (event) {
      var buttonValue = event.target.value;

      if (buttonValue == questions[currentQuestion].answer) {
        // the answer is correct
        // add to their score here
        window.score += 1;
        document.getElementById("score").innerHTML = "Score: " + window.score;
      } else {
        // the answer is wrong
        window.timer -= 10;
      }

      // move onto next question
      document.getElementById("answers").innerHTML = "";

      // last question
      if (currentQuestion === questions.length - 1) {
        endQuiz();
      } else {
        currentQuestion += 1;
        displayQuestion();
      }
    });
    document.getElementById("answers").append(button);
  }
}

// finish off the quiz
function endQuiz() {
  // clear the question
  // save the score in localStorage
  clearInterval(window.createTimer);
}
