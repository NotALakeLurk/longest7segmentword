const { Console } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');
const fs = require('fs');

function syncReadFile(filename) //return an array of every line in a file
{
  const contents = readFileSync(filename, 'utf-8'); //read the file

  const arr = contents.split('\n'); //use .split to seperate each line into a word

  return arr;
}

function longestWordWithoutExcludedCharacters(banned)
{
  //Cares not about case
  const words = syncReadFile('dictionary.txt'); //gets an array of every english word
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

  return(outputWord); //return the results
}

function allWordsBegginingWith(character) //return all words that begin with the given character
{
  words = syncReadFile('dictionary.txt'); //read the fileb
  let outWords = []; //set the output to an empty array

  for (let i = 0; i < words.length; i++)
  {
    const word = words[i];
    
    if(word[0] == character) //if the first character of the word is `character`, add that word to the list
    {
      outWords.push(word);
    }
  }

  return(outWords); //return the list of words
}

/*for (const gWord of allWordsBegginingWith('g'))
{
  console.log(`2 ${gWord}`);
}*/

//console.log(longestWordWithoutExcludedCharacters(['i','k','m','q','v','w','x','s'])); //log the longest word that can be displayed on a seven-segment display

