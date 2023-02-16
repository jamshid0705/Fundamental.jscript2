'use strict';

// a= 3
// console.log(a)
// const private=2
// console.log(private)

//////////////// 33 functions ////////////////

function fruits(){
  console.log("Hello everyone ! How are you ?")
}
fruits()

function fruits1(a){
  return `Hello ${a}!`
}
console.log(fruits1('Jamshid'))

///////////////// 34 function declarations and expressions ///////////////
const name = age(23);
console.log(name);
function age(birthYear){
  return `Your age is ${birthYear}`
}


const age1=function(birthYear){
  return `Your age is ${birthYear}`
}
const name1=age1(34)
console.log(name1)

