//Given a sentence containing two or more words, return the equivalent of the sentence when capitalized
let sentence = "the tales of scotch!"
function capitalized(str){
  let array = str.split(" ")
  let convertedArray = []
  for(let word of array){
    let converted = word[0].toUpperCase() +
    word.slice(1)
    convertedArray.push(converted)
  }
  let res = convertedArray.join(" ")
  console.log(res)
}
capitalized(sentence)