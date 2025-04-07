let a="hello";
let b="coders";
//synchronous programming 
console.log(a,"a");
//console.log(b,"b");
//api calls 4s;
function getUserName(){
    console.log("Kemika");
}
//4s
setTimeout(getUserName,2000);//1000ms equals to 1s.
console.log(b,"b");
console.log(b,"b");
//external forces dependency example:api calls
//multiplication funtion 
const multiply =(a,b)=>{
    console.log(a*b);
};
const getMultiplication =(a,b, callBack)=> {
    callBack(a,b);
};
//callback funcion pass as an argument to another function 
getMultiplication (10,5,multiply);

// arrays
const persons = [
    {firstname: "Krishu", lastname: "Shrestha"},
    {firstname: "Kemika", lastname: "Sherchan"},
    {firstname: "Saloni", lastname: "Aryal"},
]; 
// ["Krishu", "Kemika", "Saloni"]

const getUserNames = (p, i) => {
    console.log(p.firstname, "firstName"); 
    return p.firstname; 
    // return p.firstname
}; 

let users = persons?.map(getUserNames); 
console.log(users, "users");

let myPromise = new Promise(function (resolve, reject) {
    let result = false;

    if (result) {
        resolve("Promise resolved successfully.");
    } else {
        reject("Promise rejected.");
    }
};

myPromise
.then((result)=> console.log(result, "result result"))
.catch((error)=> console.log(error, "error error"));