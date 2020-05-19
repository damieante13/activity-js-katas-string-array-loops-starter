/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE

const mountainHeight = [27940, 28251, 28169, 29029, 27838];

let position = 0;
let tallestHeight=0;

while (position < mountainHeight.length){
 
   
 const currentHeight = mountainHeight[position]
 if (currentHeight > tallestHeight){
tallestHeight=currentHeight;

 }
 position += 1;
}


const outputElement = document.querySelector("main");

outputElement.innerHTML = tallestHeight;
console.log(tallestHeight); 