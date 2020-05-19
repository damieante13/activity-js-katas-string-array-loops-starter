/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
const newArray=[]
// YOUR CODE HERE
let position=0;

while(position < redundantArray.length){
  const currentNumber = redundantArray[position]
  
  const mostRecentItemInNewArray = newArray[newArray.length -1]
  if(mostRecentItemInNewArray !== currentNumber){
    newArray.push(currentNumber);
  }
  
  
  position += 1;
  console.log(newArray)
}
