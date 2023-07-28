//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array?
function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      // Swap elements at start and end
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      // Move the pointers inward
      start++;
      end--;
    }
  
    // The array is now reversed in place
  }
  
  // Test example
  const myArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(myArray);
  console.log(myArray); // Output: [5, 4, 3, 2, 1]