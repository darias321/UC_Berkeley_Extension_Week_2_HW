var existingScores = JSON.parse(localStorage.getItem("scores"));
if (existingScores === null) {
  existingScores = [];
}

existingScores.push(window.score);
document.getElementById("question").innerHTML = "";
document.getElementById("score").innerHTML = window.score;
document.getElementById("timer").innerHTML = "";

window.score = 0;
localStorage.setItem("scores", JSON.stringify(existingScores));

// list the existing scores in html
for (var i = 0; i < existingScores.length; i++) {
  // display the scores on the page using
  var listItem = document.createElement("li");
  listItem.innerHTML = existingScores[i];
  document.getElementById("scores").append(listItem);
}
