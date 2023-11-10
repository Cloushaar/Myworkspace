const quotes = [
    {
        quote: "Weakness of attitude becomes weakness of character.",
        author: "Albert Einstein"
    },
    {
        quote: "If you want the present to be different from the past, study the past.",
        author: "Baruch Spinoza"
    },
    {
        quote: "As long as you derive inner help and comfort from anything, keep it.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The revolution is not an apple that falls when it is ripe. You have to make it fall.",
        author: "Ernesto \"Che\" Guevara"
    },
    {
        quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author: "Thomas A. Edison"
    },
    {
        quote: "Failure is not the only punishment for laziness; there is also the success of others.",
        author: "Jules Renard"
    },
    {
        quote: "God doesn't require us to succeed; he only requires that you try.",
        author: "Mother Teresa"
    },
    {
        quote: "Passion governs, and she never governs wisely.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The policy of being too cautious is the greatest risk of all.",
        author: "Jawaharlal Nehru"
    },
    {
        quote: "Let every man be respected as an individual and no man idolized.",
        author: "Albert Einstein"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;