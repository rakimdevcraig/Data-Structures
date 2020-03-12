// Given a string of text, find and return the most recurring character. e.g
let word = 'aabacadaddddd'

function recurring(str){
  let hashTable = {}
  let most = 0
  letter = ""
  for(let letter of str){
    if(hashTable[letter]){
      hashTable[letter] ++
    }else{
      hashTable[letter] = 1
    }
  }
  for(let value in hashTable){
    if(hashTable[value] > most){
      most = hashTable[value]
      letter = value
    }
  }
  return[letter,most]
}
recurring(word)