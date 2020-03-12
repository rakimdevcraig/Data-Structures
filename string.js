//.length- Find the length
const str1 = "four"
// console.log(str1.length)
//returns 4


//.trim()- Remove White space from beginning and end
const sentence = "     This is a sentence      "
const trimmed = sentence.trim()
// console.log(trimmed)
//returns This is a sentence

//.includes()- Determins if string contains substring
const name = "Rakim Craig"
// console.log(name.includes("Rakim"))
//returns true
// console.log(name.includes("Elijah"))
//returns false


//.toUpperCase()capitalizes string
const word = "apex legends"
// console.log(word.toUpperCase())
//returns APEX legends
// console.log(word[0].toUpperCase())
//returns A


const capitalizedWord = "THESE ARE CAPITAL LETTERS"
const lowerCase = capitalizedWord.toLowerCase()
// console.log(lowerCase)
//returns "these are capital letters"
const firstLetterLowerCase = capitalizedWord[0].toLowerCase()
// console.log(firstLetterLowerCase)
//returns "t"

//slice takes a section of a string and returns it as a new string
const original = "Rakim Elijah Craig"
const lastOnly = original.slice(12)
// console.log(lastOnly)
const twoWords = "two words"
const wordCut = twoWords.slice(3)
// console.log(wordCut)
//if you want to slice a certain point of the string
const word1 = "one two three four"
const middleWords = word1.slice(3,13)
// console.log(middleWords)

//split converts string into array of strings
const bigString = "two words"
// has to be an empty space and not "" instead " "
const split = bigString.split(" ")
const wordsList = "uno dos tres"
const splitUp = wordsList.split(" ")
// console.log(splitUp)
