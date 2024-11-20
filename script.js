const quotes = [
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Your limitation—it's only your imagination.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths."
];

const generateQuoteBtn = document.getElementById("generateQuote");
const quoteDisplay = document.getElementById("quote");

generateQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
