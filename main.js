document.addEventListener("DOMContentLoaded", () => {
  const symbols = [
    "🌙",
    "🍀",
    "🌟",
    "🍎",
    "🌙",
    "🍀",
    "🌟",
    "🍁",
    "🍎",
    "🚀",
    "🚀",
    "🍁",
  ];

  const shuffleSymbols = symbols.sort(() => Math.random() - 0.5);
  const gameBoard = document.querySelector(".gameBoard");
  const resetButton = document.querySelector(".resetGame");

  let flippedCards = [];
  let matchedCards = 0;

  shuffleSymbols.forEach((symbol) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });

  function flipCard(e) {
    const card = e.target;

    if (
      card.classList.contains("flipped") ||
      card.classList.contains("matched")
    ) {
      return;
    }

    card.textContent = card.dataset.symbol;
    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedCards += 2;
        flippedCards = [];

        if (matchedCards === shuffleSymbols.length) {
          setTimeout(() => {
            alert("You win!");
          }, 500);
        }
      } else {
        setTimeout(() => {
          firstCard.textContent = "";
          secondCard.textContent = "";
          firstCard.classList.remove("flipped");
          secondCard.classList.remove("flipped");
          flippedCards = [];
        }, 500);
      }
    }
  }
  resetButton.addEventListener("click", () => {
    location.reload();
  });
});
