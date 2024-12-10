// Event listeners for index.html buttons
document.getElementById('daily-quote-btn').addEventListener('click', () => {
  window.open('quote.html?type=daily', '_blank');
});

document.getElementById('random-quote-btn').addEventListener('click', () => {
  window.open('quote.html?type=random', '_blank');
});

