"use strict";

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

// const calcAverage=(score1,score2,score3)=>(score1+score2+score3)/3

// function checkWinner(data1,data2,data3,data4,data5,data6){
//   const avgDolhins=calcAverage(data1,data2,data3)
//   const avgKoalas=calcAverage(data4,data5,data6)
//   if(avgDolhins>=2*avgKoalas){
//     return `Dolhins win🎉 (${avgDolhins} vs ${avgKoalas})`
//   }else if(avgDolhins*2<=avgKoalas){
//     return `Koalas win🎉 (${avgKoalas} vs ${avgDolhins})`;
//   } else{
//     return `Ohterwise no team wins ! (Koalas ${avgKoalas} vs Dolhins ${avgDolhins})`;
//   }
// }

// console.log(checkWinner(44,23,71,65,54,49))
// console.log(checkWinner(85,54,41,23,34,27))

/////////////////// 38 introduction to Arrays ////////////////
// const friends =['jamshid','shamshod','xurshid'];
// const years=new Array(2000,2005,1998)
// console.log(friends,years)

// console.log(friends.length)
// console.log(friends[friends.length-3])

// const arr=[34+9,"olma",34>9?'onasi':'bolasi',friends]
// console.log(arr)
// // console.log(typeof undefined/3)
// // let a='2'
// // console.log(a-6)

// // console.log(h)
// // var h=4

// const age=function(years){
//   return 2023-years
// }

// const newArray=new Array(age(years[0]),age(years[2]),age(years[1]))
// console.log(newArray)

/////////////////// 40 Basic Array operations /////////////////

// const friends =['jamshid','shamshod','xurshid'];

// // add element
// friends.push('nodir')
// console.log(friends.push('qahramon'))
// console.log(friends)
// console.log(friends.unshift('olma'))
// console.log(friends)
// // remove elements
// console.log(friends.pop())
// console.log(friends.pop())
// console.log(friends.pop())
// console.log(friends)
// console.log(friends.shift())
// console.log(friends)

// console.log(friends.indexOf('jamshid'))

// console.log(friends.includes('shamshod'))
// console.log(friends.includes('olma'))

////////////////////// 41 coding challenge 2 /////////////////

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bill=[125,555,44]
// const tip=[calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])]
// console.log(bill,tip)

// const newArrFunc=(bill,tip)=> new Array(bill,tip)
// const newArr = new Array(
//   newArrFunc(bill[0], tip[0]),
//   newArrFunc(bill[1], tip[1]),
//   newArrFunc(bill[2], tip[2])
// );
// console.log(newArr)

////////////////////// 42 object //////////////

// const arr=[
//   'jamshid',
//   'xatamov',
//   2023-2000,
//   'programmer'
// ]

// const obj={
//   firstname:'jamshid',
//   lastname:'xatamov',
//   age:2023-2000,
//   job:'programmer',
//   friends : ["jamshid", "shamshod", "xurshid"]
// }

// console.log(arr)
// console.log(obj)

/////////////////// 43 dot and . bracket notation //////////////
// const obj = {
//   firstname: "jamshid",
//   lastname: "xatamov",
//   age: 2023 - 2000,
//   job: "programmer",
//   friends: ["jamshid", "shamshod", "xurshid"],
// };

// console.log(obj.lastname);
// console.log(obj["age"]);

// const interestedIn = prompt(
//   "What do you want to know about Jamshid ? Choose between firstname, lastname, age, job, friends"
// );

// obj.location = "Tashkent";
// obj["email"] = "jamshid0705@gmail.com";
// console.log(obj);

// if (obj[interestedIn]) {
//   console.log(obj[interestedIn]);
// } else {
//   console.log(
//     "Wrong request ! Choose between firstname, lastname, age, job, friends"
//   );
// }

// console.log(`${obj.firstname} has got ${obj.friends.length} friends and his best friend is called ${obj.friends[1]}`)

// const arr=[
//   'jamshid',
//   'xatamov',
//   2023-2000,
//   'programmer'
// ]
// const newArr=new Array(...arr,'olma')
// console.log(newArr)
////////////////////////////// 44 object methods ////////////////

// const obj = {
//   firstname: "jamshid",
//   lastname: "xatamov",
//   birthYear: 2000,
//   job: "programmer",
//   friends: ["jamshid", "shamshod", "xurshid"],
//   hasDriverLicense: false,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(obj.calcAge());
// console.log(JSON.stringify(obj));
// console.log(typeof obj)
// // console.log(obj)
// // console.log(obj['calcAge']());
// console.log(
//   `${obj.firstname} is a ${obj.calcAge()} years old. He has ${
//     obj.hasDriverLicense === true ? "a" : "not a"
//   } driver's license !`
// );

/////////////////////////// 45 coding challenge 3 ///////////////
// const mark = {
//   fullname: "Mark",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const john = {
//   fullname: "John",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// const result =
//   mark.calcBMI() > john.calcBMI()
//     ? `${mark.fullname}'s BMI (${mark.calcBMI()}) is higher than ${
//         john.fullname
//       }'s BMI (${john.calcBMI()}) !`
//     : `${john.fullname}'s BMI (${john.calcBMI()}) is higher than ${
//         mark.fullname
//       }'s BMI (${mark.calcBMI()}) !`;

// console.log(result)

///////////////// 46 for loop //////////////////
// for (let i=1;i<=10;i++){
//   console.log(`${i}- team !`)
// }

///////////////// 47 loops array //////////////

// const arr = [
//   "jamshid",
//   "xatamov",
//   2023 - 2000,
//   "programmer",
//   ["jamshid", "shamshod", "xurshid"],
// ];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], typeof arr[i]);
// }
// // continue and break
// console.log('---Continue---')
// for (let i = 0; i < arr.length; i++) {
//   if(typeof arr[i] !=='string') continue;
//   console.log(arr[i], typeof arr[i])
// }
// console.log('---Break---')
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") break;
//   console.log(arr[i], typeof arr[i]);
// }

// // challenge
// const years = [1998, 1988, 1999, 2000, 2003];
// const emptyArr = [];
// for (let i = 0; i < years.length; i++) {
//   // emptyArr.push(2023-years[i])
//   emptyArr[i] = 2023 - years[i];
// }
// console.log(emptyArr);

/////////////// 48 Looping backward and looping in looping /////////////
// const arr = [
//   "jamshid",
//   "xatamov",
//   2023 - 2000,
//   "programmer",
//   ["olma", "nok", "shaftoli"],
// ];

// for (let i=arr.length-1;i>=0;i--){
//   console.log(arr[i])
//   if(typeof arr[i]==='object'){
//     for(let j=0;j<arr[i].length;j++){
//       console.log(arr[i][j])
//     }
//   }
// }

// //////////////// 49 while loop ////////////////////

// let team = 1;
// while (team <= 6) {
//   console.log(`${team}-team`);
//   team++;
// }

// let random = Math.trunc(Math.random() * 5) + 1;
// console.log(random);
// while (random !== 5) {
//   console.log(random);
//   random = Math.trunc(Math.random() * 5) + 1;
// }

//////////////////// 50 coding challenge ////////////

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
for (let i = 0; i < bill.length; i++) {
  tips.push(calcTip(bill[i]));
  total.push(bill[i] + calcTip(bill[i]));
}
console.log(tips);
console.log(total);

const calsAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calsAverage(total));
