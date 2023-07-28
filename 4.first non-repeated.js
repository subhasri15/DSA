//Q4. Write a program to print the first non-repeated character from a string?
function findFirstNonRepeatedCharacter(str) {
    const charCount = {};
    
    // Count the occurrences of each character in the string
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Find the first non-repeated character
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeated character found, return null or any specific value
    return null;
  }
  
  // Test example
  const myString = "aabbccdee";
  console.log(findFirstNonRepeatedCharacter(myString)); // Output: "d"