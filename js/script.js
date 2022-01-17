/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * below is an array containing 9 quote objects. Each has a quote and an author property.
***/
const quotes = [
  {
      author: 'Fyodor Dostoevsky',
      quote: 'It takes something more than intelligence to act intelligently.'
  },
  {
      author: 'Werner Herzog',
      quote: 'What would an ocean be without a monster lurking in the dark? It would be like sleep without dreams.'
  },
  {
      author: 'Margaret  Atwood',
      quote: 'In the spring, at the end of the day, you should smell like dirt.'
  },
  {
      author: 'Mae West',
      quote: 'You only live once, but if you do it right, once is enough.'
  },
  {
      author: 'Mark Twain',
      quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.'
  },
  {
      author: 'Malcom X',
      quote: 'The future belongs to those who prepare for it today.'
  },
  {
      author: 'Stephen Hawking',
      quote: 'Life would be tragic if it weren’t funny.'
  },
  {
      author: 'Frank Zappa',
      quote: 'A mind is like a parachute. It doesn’t work if it isn’t open.',
      year: '1974'
  },
  {
      author: 'Ella Fitzgerald',
      quote: 'It isn’t where you came from. It’s where you’re going that counts.',
      citation: 'Jazz Quarterly'
  }
]


const colors = ['blue', 'green', 'red', 'purple', 'orange'];

/***
 * `getRandomQuote` function
 * pass in quotes.length for the top parameter to set the upper limit
***/
function getRandomQuote(top) {
  let pos = Math.floor(Math.random() * top);
  return quotes[pos];
}

/***
 * `getRandomQuote` function
 * pass in colors.length for the top parameter to set the upper limit
***/
function getRandomColor(top) {
    let pos = Math.floor(Math.random() * top);
    return colors[pos];
}


/***
 * `printQuote` function
 * this will check for the optional citation and year properties.
 * If they exist, span elements will be created for their values.
***/
function printQuote() {
    let quoteObj = getRandomQuote(quotes.length);
    let html = `<p class= "quote">${quoteObj.quote}</p><p class="source">${quoteObj.author}`;
    if (quoteObj.citation) {
        html += `<span class="citation"> ${quoteObj.citation}</span>`;
    }
    if (quoteObj.year) {
        html += `<span class="year"> ${quoteObj.year}</span>`;
    }
    html += '</p>'
    document.getElementById('quote-box').innerHTML = html;
    document.body.style.backgroundColor = `${getRandomColor(colors.length)}`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 * each time the button is clicked a new random quote will be generated.
 * PLEASE NOTE: it is possible to get the same quote twice in a row.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);