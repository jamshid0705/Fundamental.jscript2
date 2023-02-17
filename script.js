'use strict';

// a= 3
// console.log(a)
// const private=2
// console.log(private)

//////////////// 33 functions ////////////////

// function fruits(){
//   console.log("Hello everyone ! How are you ?")
// }
// fruits()

// function fruits1(a){
//   return `Hello ${a}!`
// }
// console.log(fruits1('Jamshid'))

// ///////////////// 34 function declarations and expressions ///////////////
// const name = age(23);
// console.log(name);
// function age(birthYear){
//   return `Your age is ${birthYear}`
// }


// const age1=function(birthYear){
//   return `Your age is ${birthYear}`
// }
// const name1=age1(34)
// console.log(name1)

// //////////////// 35 Arrow function //////////////////////
// const person=(age,name)=>`${name}'s age is ${age}`
// const a=person(20,'Jon') 
// console.log(a)

// const person1=(age,name)=>{
//   return `${name}'s age is ${age}`;
// }
// const b = person1(34, "Bob");
// console.log(b);

////////////////// 36 functions calling other functions ////////////////
function cutFruit(fruit){
  return fruit * 2;
}

function fruitProcessor(apple,orange){
  const fruitApple=cutFruit(apple)
  const fruitOrange=cutFruit(orange)
  return `You have got ${fruitApple} apples and ${fruitOrange} oranges !`
}

console.log(fruitProcessor(3,4))

/////////////// 37 