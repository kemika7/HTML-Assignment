// alert("Hello World")
// varaiable declaration using var keyword var es5
var firstName= "Kajal"; // variable decalare
var firstName= "Kemika"; // redeclare
console.log(firstName, "firstName");
//  global scope
// function declaration
function printName()
{
    var lastName= "Sherchan"; //function scope
    console.log(firstName +" " + lastName, "name"); //log the firstname
    console.log(lastName, "lastName");
}
printName(); // function call

// varaiable declaration using let keyword let es6
let fruit = "Apple" ;
// let fruit ="Banana"; cannot redeclare block-scoped varaible 'fruit'
fruit= "Banana"; //reassign values
console.log(fruit, "fruit");

const book = "Zara";
// const book = "Zara"; cannot redeclare const
// book= "News Book";
console.log(book,"book");
{
var color="green"; // var is function scope
}
console.log(color,"colorcolor");
//block

//  console.log(book,"book");
//  {
//     let color="green"; //let and const are block scope
//  }
//  console.log(color,"colorcolor");
//block

//  var isValid= true; //boolean
//  var isSelected= null; //null
//  var greet;
//  var is declared and value is not assigned so it will return undefined
//  console.log(greet, "greet greet"); 

//  let isValid= true; //boolean
//  let isSelected= null; //null
//  let greet;
//  console.log(greet, "greet greet"); 

 //Object= collection of key-value properties
 let person = {
    name:"Ram", // key-value pairs
    age:"20",
    height:"5ft",
 };
 console.log(person, "personpersonperson");
 console.log(person["age"], "age");
 console.log(person.height, "person height");

 //square brackets
 let fruits= ["Apple", "Banana", "Orange"]; //array of string
 console.log(fruits[0],"fruits"); //access elememt using index

 let books= ["Science","Maths","English"];
 console.log(books, "books");
 console.log(fruits.length,"fruits");

 let ages=[10,20,30,40,50];//array of numbers
 console.log(ages,"ages ages");

 let students= [
    {
        name:"Ram",
        age: 20,
    },
    {
        name:"Shyam",
        age: 21,
    },
    {
        name:"Hari",
        age: 20,
    },
];
console.log(students[0].age,"Ram");

//functions
let age=29;
//function to print Age
function printAge(age){
    console.log(age,"age of students");
}
printAge(students[0].age);
printAge(students[1].age);

//Hi I am Kemika. I am 20 years old
function printNameandAge(name,age){
    console.log("Hi I am " + name + " ." +" I am "+ age + "years old.");
}
printNameandAge("Ram",20);

// function movehand(movehand){
//     console.log(movehand);
// }
// printmovehand;
