//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairsWithSum(arr, targetSum) {
    const pairs = {};
    const result = [];
  
    for (let num of arr) {
      const complement = targetSum - num;
      if (pairs[complement]) {
        result.push([num, complement]);
      }
      pairs[num] = true;
    }
  
    return result;
  }
  
  
  const integerArray = [2, 4, 3, 6, 8, 9];
  const targetSum = 10;
  console.log(findPairsWithSum(integerArray, targetSum));
