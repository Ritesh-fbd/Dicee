// Check if this is the first refresh
if (sessionStorage.getItem("hasRefreshed")) {
  // Dice roll logic
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const im = document.querySelector(".img1");
  im.setAttribute("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const im2 = document.querySelector(".img2");
  im2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Determine the winner
  let resultText = "";
  if (randomNumber1 > randomNumber2) {
    resultText = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    resultText = "🚩 Player 2 Wins!";
  } else {
    resultText = "🤝 It's a Draw!";
  }

  document.querySelector("h1").textContent = resultText;
} else {
  // First load — don't change h1
  sessionStorage.setItem("hasRefreshed", "true");
}