//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.


function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
  }
  
  // Test example with 3 disks
  const numberOfDisks = 3;
  const sourcePeg = 'A';
  const auxiliaryPeg = 'B';
  const targetPeg = 'C';
  
  towerOfHanoi(numberOfDisks, sourcePeg, auxiliaryPeg, targetPeg);