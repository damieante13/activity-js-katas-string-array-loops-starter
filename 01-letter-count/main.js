/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. 
  3. Write a WHILE statement which loops over the "word" string and
     counts the number of times the "letter" appears.
     -write a while statement
     -Loop over the WORD string
     -Count the number of times the letter appears in the word
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to get user input
     for the "letter" variable in Step 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!*/

const letterToSearchSpan = document.querySelector("#textbox");
const searchForLetterBtn = document.querySelector("#search-for-letter");

const word = "SUPERCALIFRAGILISTICEXPIALIDOCIOUS";
let letterGuessed = 0;

let letterCount = 0;
let position = 0;

searchForLetterBtn.addEventListener("click", function(){ 

while (position < word.length){
   const currentLetter = word[position];
   letterGuessed=letterToSearchSpan.value;
   
   const lettersMatch = currentLetter.toLowerCase() === letterGuessed.toLowerCase();

if (lettersMatch){
   letterCount += 1;
}
position += 1;
}

const outputElement = document.querySelector("main"); 

if (letterCount > 0){
  outputElement.innerHTML = 
"The letter " + 
letterGuessed + 
" occurs in the word " + 
word +
" "  +
letterCount +
" times." 
}else{
outputElement.innerHTML = "Nope, that letter doesn't exist in my word!" 
}
position += 1;
})
