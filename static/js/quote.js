// Load quotes.json and determine type (daily or random)
const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const today = new Date().toISOString().slice(0, 10); // Get YYYY-MM-DD for daily quote

fetch('quotes.json')
  .then(response => response.json())
  .then(quotes => {
    let quote;
    if (type === 'daily') {
      // Use hash of the date to pick a deterministic quote
      const index = Math.abs(today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % quotes.length;
      quote = quotes[index];
    } else if (type === 'random') {
      // Pick a random quote
      const index = Math.floor(Math.random() * quotes.length);
      quote = quotes[index];
    }

    // Display the quote
    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `— ${quote.author}`;
  })
  .catch(error => {
    console.error('Error loading quotes:', error);
    document.getElementById('quote-content').innerHTML = '<p>Could not load quotes. Please try again later.</p>';
  });

