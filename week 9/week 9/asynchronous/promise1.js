//get user data
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject("Error fetching user data");
            resolve("Error fetching user data");
            }, 2000);
        });
}

getUserData()
.then ((data) => console.log(data,"data"))
.catch((error) => console.log(error, "error"));
//incase of operation fail we use .catch
//incase of operation success we use .then

async function fetchData () {
    //async= promise return
    console.log("Fetching data...");
    //let data= await getUserData();
    let data= getUserData();
    console.log(data, "datadatadata");
}
fetchData(); 

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error("Error: ", error));