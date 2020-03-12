let keem = {
  name:"keem",
  age:28,
  job:"none"
}
//Object.keys(keem) returns keys
//Object.values(keem)//returns values
//Object.entries(keem)//returns keys and values

//use for of to iterate over objects
// for(let key of Object.keys(keem)){
//   console.log(key)
// }

// for(let value of Object.values(keem)){
//   console.log(value)
// }

// for(let entry of Object.entries(keem)){
//   console.log(entry)
// }

//use for in to iterate over objects
//access keys
for(let key in keem){
  // console.log(key)
}

//access values
let empty = []
for(let value in keem){
  console.log(keem[value])
  if(keem[value] == 28){
    empty.push(keem[value])
  }
}
console.log(empty)