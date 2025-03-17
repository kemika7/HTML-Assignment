//conditions
let Age=11;
if(Age>10){
    console.log(true);
}
else if(Age>30){
    console.log(error);
}
else{
    console.log(false);
}
//days
let day=3;
if(day===1){
    console.log("sunday");
}
else if(day===2){
    console.log("monday");
}
else if(day===3){
    console.log("tuesday");
}
else if(day===4){
    console.log("wednesday");
}
else if(day===5){
    console.log("thursday");
}
else if(day===6){
    console.log("friday");
}
else
{
    console.log("saturday");
}
//function days
function printDays(Days){
if(Days===1){
    console.log("sunday");
}
else if(Days===2){
    console.log("monday");
}
else if(Days===3){
    console.log("tuesday");
}
else if(Days===4){
    console.log("wednesday");
}
else if(Days===5){
    console.log("thursday");
}
else if(Days===6){
    console.log("friday");
}
else
{
    console.log("saturday");
}
}
printDays(1)
printDays(3)

//ternary operators
// let AGE=15;
// AGE>10>console.log(AGE) : console.log("Age is too low.");

//switch case
function printDAYS(DAYS) {
    switch (DAYS) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;
        default:
            console.log("saturday");
    }
}
printDAYS(5);
printDAYS(6);
