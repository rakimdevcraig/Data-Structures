//push: Add an element to the end of the array
let arr = [1,2]
arr.push(3)
// console.log(arr)
//returns 1,2,3

//pop: remove an element from the end of array
arr.pop()
// console.log(arr)
//returns 1,2


//shift removes an item from the beginning
let arr1 = [5,6,7,8]
arr1.shift()
// console.log(arr1)
//returns 6,7,8

//unshift adds item to the beginning of array
arr1.unshift(5)
// console.log(arr1)
//returns 5,6,7,8


//splice can delete elements from array

let arr2 = [9,8,7,6,5,4]
// arr2.splice(index to remove,num elements to remove)
// arr2.splice(2)
//removes from that index to the end of the array
// arr2.splice(2,2)
//removes from that index and it removes 2 elements

//splice can add elements
// arr2.splice(index to insert, 0 if we want to delete no elements, what we want to add:string or number)
arr2.splice(3,0,6.5)
console.log(arr2)

//slice