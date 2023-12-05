function firstChar(text) {
  // your code here
	 // Trim leading and trailing spaces
  text = text.trim();

  // Check if the string is empty after trimming
  if (text === '') {
    return '';
  }

  // Loop through each character in the string
  for (let i = 0; i < text.length; i++) {
    // Check if the current character is not a space
    if (text[i] !== ' ') {
      // Return the first non-space character
      return text[i];
    }
  }

  // If all characters are spaces, return an empty string
  return '';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
