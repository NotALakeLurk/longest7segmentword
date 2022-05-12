const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8'); //read the file

  const arr = contents.split('\n'); //use .split to seperate each line into a word

  return arr;
}

//Cares not about case
const words = syncReadFile('dictionary.txt'); //gets an array of every english word
const banned = ['i','k','m','q','v','w','x','s']; //characters that cannot be displayed on a 7 segment display
let outputWord = ''; //initialize a value for the output

for(let wordNum = 0; wordNum < words.length; wordNum++)
{
  let currentWord = words[wordNum]; //get the current word
  let isBanned = false; //set a variable to determine if a word is banned

  for(let bannedNum = 0; bannedNum < banned.length; bannedNum++) 
  {
    let bannedChar = banned[bannedNum]; //get the current banned character to check

    isBanned = (currentWord.includes(bannedChar)) ? true : false; //set isBanned to true if the word includes a banned character
    if(isBanned == true) //if the word is banned, break
    {
      break;
    }
  }

  if(isBanned == true) //go to the next word if this one is banned
  {
    continue;
  }

  if(currentWord.length > outputWord.length) //assign the longest applicable word to be outputed
  {
    outputWord = currentWord;
  }
}

console.log(outputWord); //display the results