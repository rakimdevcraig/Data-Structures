//length
//definition
//example



//trim
//definition
//example

//includes
//definition
//example

//toUppercase
//definition
//example of whole word uppercase
//example of first letter uppercase


//toLowercase
//definition
//example whole word toLowercase//example of first letter uppercase



//slice
//definition
//example

//split
//definition
//example
//split a word into an array of letters
//split a sentence in an array of words

//take a lowercase letter word and capitalize the first letter and return the whole string back
let lowerCase = "lowercase set of words"
let split = lowerCase.split(" ")
let empty = []
function capitalize(arr){
  // for(let word of arr){
  //   word.toUpperCase()
  //   console.log(word)
  //   empty.push(word)
  // }




//take a fully uppercase word and return back the word with the first letter capitalized and the rest lowercase

  for(let i = 0; i < arr.length; i++){
    // console.log(arr[i].toUpperCase())
    let capital = arr[i][0].toUpperCase()
    let sliced = arr[i].slice(1)
    let converted = capital + sliced
    empty.push(converted)
  }
  let finalString = empty.join(' ')
  console.log(finalString)
}
// capitalize(split)



let original = "this IS a STRing OF WORDS"

function cap(str){
  let arr = str.split(" ")
  let backToString = []
  for(let word of arr){
    let converted = word[0].toUpperCase()
    + word.slice(1).toLowerCase()
    backToString.push(converted)
  }
    console.log(backToString)
}
cap(original)

let string = "sTRIng oF wORDs"

function cap(str){
  let arr = str.split(" ")
  let convertedArray = []
  for(let i = 0; i < arr.length; i++){
    let converted = arr[i][0].toUpperCase() + 
    arr[i].slice(1).toLowerCase()
    convertedArray.push(converted)
  }
  convertedArray.join(" ")
  return convertedArray
}
cap(string)