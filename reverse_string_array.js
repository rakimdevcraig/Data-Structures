//reverse string
let str = "keem"
function reverse(string){
  let array = string.split("")
  let reversedArray = []
  for(let i = array.length-1; i >= 0; i--){
    reversedArray.push(array[i])
  }
  let result = reversedArray.join("")
  return result
}
// reverse(str)
let str1 = 'reversed'
function reverse2(string){
  let arr = string.split("")
  let a = 0
  let b = arr.length-1
  let temp = ""
  while(a < b){
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
    a++
    b--
  }
    let result = arr.join("")
    console.log(result)
}
reverse2(str1)


//reverse array
let nums = [1,2,3,4]
function revArray(arr){
  let a = 0
  let b = arr.length-1
  let c = null

  while(a < b){
    c= arr[a]
    arr[a] = arr[b]
    arr[b] = c
    a++
    b--
  }
  console.log(arr)
}
// revArray(nums)