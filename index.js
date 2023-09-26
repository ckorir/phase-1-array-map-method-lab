const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  // Use map to iterate through the tutorials array
  return tutorials.map((title) => {
    // Split the title into an array of words
    const words = title.split(' ');
    // Capitalize the first letter of each word and keep the rest in lowercase
    const formattedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // Join the formatted words back into a single string with spaces
    return formattedWords.join(' ');
  });
}