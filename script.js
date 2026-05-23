// Quiz logic
let score = 0;
function checkAnswer(correct) {
  if (correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  document.getElementById("score").innerText = "Score: " + score;
}

// Fetch API joke
async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  document.getElementById("joke").innerText = data.setup + " - " + data.punchline;
}
