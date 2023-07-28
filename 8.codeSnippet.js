//Q8.Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsClosed(codeSnippet) {
    const stack = [];
    const bracketPairs = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    for (let char of codeSnippet) {
      if (bracketPairs[char]) {
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        const lastBracket = stack.pop();
        if (!lastBracket || bracketPairs[lastBracket] !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Test examples
  const codeSnippet1 = 'function add(a, b) { return a + b; }';
  const codeSnippet2 = 'function multiply(a, b) { return a * b; } [2, 4, 6]';
  const codeSnippet3 = 'const obj = { a=b+c ];';
  
  console.log(areBracketsClosed(codeSnippet1)); // Output: true
  console.log(areBracketsClosed(codeSnippet2)); // Output: true
  console.log(areBracketsClosed(codeSnippet3)); // Output: false