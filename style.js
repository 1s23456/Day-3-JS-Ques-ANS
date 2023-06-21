//Q1: 

// let a =10;
// let b='10';

// console.log(typeof(a));
// console.log(typeof(b));

// == is equality operator
// === is strictly operator

// console.log(a==b);
// console.log(a===b);




//Q2:
// // Var--1. redeclared and reinitalised
// var x=10;
// var x=20;//redeclare
// x = 30;  //reinitalised
// console.log(x);

//      2. Global scope and Function scope
//Types of scope:3 types
// 1.Global Scope
//2.Function scope
//3.Block scope

//Global scope--
// var ABC=10;
// let PQR=20;
// const XYZ=30;


// //FUnction scope:
// function funcScope(){
//               var ABC=100;
//             let PQR=200;
//           const XYZ=300;
//                console.log(ABC);  //100
//                console.log(PQR); //200
//               console.log(XYZ);  //300
// }
// funcScope()

// {
//               console.log(ABC);
//               console.log(PQR);
//               console.log(XYZ);
// }

//Block scope:
// {
// var ABC=100;
// let PQR=200;
// const XYZ=300;
//    console.log(ABC);  //100
//    console.log(PQR); //200
//   console.log(XYZ);  //300
// } 
// console.log(ABC); //100
// console.log(PQR); //not define-error
// console.log(XYZ); //not define-error



//      3. Hoisting
 //      4.Used before introduce ES6


//Let-- 1. not redeclared and can be reinitalised
//       2. no hoisting
//       3.Tdz
//       4.Block scope,Global scope
 //       5.Introduce in ES6

 
//Const-- 1. not redeclared and can not be reinitalised
//       2. no hoisting
//       3.Tdz
//       4.Block scope,Global scope
 //       5.Introduce in ES6


 //Q3:Hoisting: Work in 2 
 //1.var
 //2.function


 //Note-- first class function,function expression ,arrow function never perform hoisting

//  console.log(a);
//  var a=10;

//  Abc();
//  function Abc(){
//               console.log("HII");
//  }
 

//Q4:TDZ
// Intoduce to improve the code quality by detecting and pre
//When trying to access variable before it's declaration with let and const keyword..
// console.log(a);
// let a =10;

// it gives ReferenceError output.
 

//Q:First class function or function expression:
// Assign a function to a variable is first class function.
 
// let P = function Sum(){
//               console.log("Hii");
//               return "Hello"
// }
// console.log(P); //OUtput: [Function : Sum]
// console.log(P());//Output:Hii and undefined
// P() ///output:Hii


//Q: Pure function:
// function Sum(a,b){
//               console.log(a*b);
// }
// Sum(10,20)
// Sum(20,20)



//Q:EXecution Context:---

// This is for Synchronus Javascript
// 1.Global Execution Context
// 2.Function Execution COntext
// 3.Memory Allocation
// 4.Code Execution
// 5.Call Stack


//FOr Asynchronous Javascript
// 1.Event loop
// 2.Callback queue
//3. Microtask queue
//4.Call Stack


// HTML-- 2 theorey,1 implement
// css - 2 theorey, 1imp
// js - 3 theorey,2 implement


//SPread operator:

//Array: 
// const arr=[2,3,4,5,6,7,8,9];
// const arr1=[1,11,12];
// // for(let i=0;i<arr.length;i++){
// //               console.log(arr[i]);
// // }
// // console.log(...arr[i]);

// const arr2=[...arr,...arr1];
// console.log(arr2);


//Function:

// const arr3 =[1,11,12,10];

// function Sum(a,b,c){
//               console.log(a,b,c);
//               return a+b+c
// }
// console.log(Sum(...arr3));

//Object:

// const obj1 = {
//               name:"Shikha",
//               age:24
// }

// const obj2 ={
//               Course : "MERN",
//               ...obj1
// }
// console.log(obj1);
// console.log(obj2);


//SetTimeout:
// function Display(){
//               let time =new Date();
//               let hr = time.toLocaleTimeString();

//               console.log(hr);
//               setTimeout(() => {
//                             Display();
//               }, 1000);
// }
// Display()


//Setinterval:
// function Display(){
//                let time =new Date();
//                let hr = time.toLocaleTimeString();

//               console.log(hr);
//              }
// setInterval(() => {
//       Display()        
// }, 1000);
// Display()


//Callback function:


//First example of callback
// function fun(a){
//               console.log("HI...")
//               a()
// }

// function fun1(){
//               console.log("Hello");
// }

// fun(fun1);

// //Second example
// function greet(name,func){
//               console.log(`Hi ${name}`);
//               setTimeout(() => {
//                     func()        
//               }, 2000);
// }

// function Sum() {
//            console.log("Hey..");   
// }

// greet('Ea23',Sum)



//Promsise:We have three promise and we want to combine all then and catch method by using Promise.all

// let myPromise = new Promise((res,rej)=>{ 
//               if(true){
//                             res("This is New Promise one")
//               }
//               else{
//                             rej("promise rejected")
//               }
// })

// function funcPromise(){
//               return new Promise((resolve,reject)=>{
//                             setTimeout(() => {
//                                   resolve("Promise resolved")        
//                             });
//               })
// }

// Promise.all([myPromise,funcPromise()])
// .then((item)=>console.log(item))
// .catch((err)=>console.log(err))




//Promise Chaining:-

// function display(num,timeout){
//       return new Promise((res,rej)=>{
//             setTimeout(() => {
//                   console.log(num);
//                   res("Promise resolved!!")
//             }, timeout);
//       })
// }

// display(1,1000)
// .then(()=>display(2,2000))
// .then(()=>display(3,3000))
// .then(()=>display(4,4000))
// .then(()=>display(5,5000))
// .then((data)=>console.log("Promise completed.."))



//Dom:
//Id and query selector are same because both return unique value.

//addeventlistener - has two parameters(event,callback function)

//Closures:

// function outer(){
//               let a=10
//               function inner(){
//                             console.log("Hello",a)
//               }
//          inner()
// }
// outer();



//Callback fnt:

// function Sum(A,B){
//      return A+B;
// }

// function Display(name,age){
//      console.log(`${name},${age}`);
// }

// Display("SHikha",Sum(10,14))



//Function Constructor: this keyword refer to current object..

// function Person(name,age,course){
//      this.Name = name;
//      this.Age =age;
//      this.Course = course;
// }


// const people1 = new Person("Shikha",24,"MERN");
// const people2 = new Person("Nishu",24,"MOCK");
// people2.add="Delhi";
// Person.prototype.Location="Patna"
// console.log(people1);
// console.log(people2.Location);



//async / await:

// async function func1(){
//      const api = await fetch('https://api.github.com/users')
//      console.log(api);
// }

// func1();




// function mypromise(alpha,timeout){
//      return new Promise((resolve,reject)=>{
//   console.log(alpha);
//   resolve("Promise resolved")
//      },timeout)
// }

// async function call(){
//      // await mypromise(1,1000)
//      // await mypromise(2,2000)
//      // await mypromise(3,3000)
//      // await mypromise(4,4000)
//      mypromise("A",1000)
//      .then(()=>mypromise("E",5000))
//      .then(()=>mypromise("I",3000))
// }
// call()



//Give an example of inheritance using function constructor:

//Constructor
function Animal(name){
     this.Name = name
}
Animal.prototype.sayHello = function(){
     console.log('${this.Name}');
}

let dog = Object.create(Animal);
dog.prototype.bark = function(){
     console.log("Bark...!!!");
}

//BY using new keyword,we create instance..

let animal1 = new Animal ('cat')
animal1.sayHello();

// dog.sayHello();

// dog.bark() 