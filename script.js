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
// function cutFruit(fruit){
//   return fruit * 2;
// }

// function fruitProcessor(apple,orange){
//   const fruitApple=cutFruit(apple)
//   const fruitOrange=cutFruit(orange)
//   return `You have got ${fruitApple} apples and ${fruitOrange} oranges !`
// }

// console.log(fruitProcessor(3,4))

// /////////////// 37 functions //////////////////
// const personAge=function(age){
//   return 2023-age
// }

//////////////////// 37 coding challenge 1 /////////////////

const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3

function checkWinner(data1,data2,data3,data4,data5,data6){
  const avgDolhins=calcAverage(data1,data2,data3)
  const avgKoalas=calcAverage(data4,data5,data6)
  if(avgDolhins>=2*avgKoalas){
    return `Dolhins win🎉 (${avgDolhins} vs ${avgKoalas})`
  }else if(avgDolhins*2<=avgKoalas){
    return `Koalas win🎉 (${avgKoalas} vs ${avgDolhins})`;
  } else{
    return `Ohterwise no team wins ! (Koalas ${avgKoalas} vs Dolhins ${avgDolhins})`;
  }
}

console.log(checkWinner(44,23,71,65,54,49))
console.log(checkWinner(85,54,41,23,34,27))