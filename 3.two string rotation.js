//Q3. Write a program to check if two strings are a rotation of each other?
function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const concatenatedStr = str1 + str1;
  
    return concatenatedStr.includes(str2);
  }
  
  // Test examples
  const string1 = 'abcde';
  const string2 = 'cdeab';
  console.log(areStringsRotations(string1, string2)); // Output: true
  
  const string3 = 'hello';
  const string4 = 'world';
  console.log(areStringsRotations(string3, string4)); // Output: false