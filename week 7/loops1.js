const users=["Ram","Shyam","Hari","Gita"];
console.log(users[0],"User 1");
console.log(users[1],"User 2");
console.log(users[2],"User 3");

for(let i=0;i<4; i++){
    document.write('s{user[i]}</br>')
    console.log(users[i],"user");
}

// while loop 

// while(condition) {
    const users = ["Ram", "Shyam", "Hari", "Gita"];

    let i = 0;
    while (i < users.length) {
        console.log(users[i], `User ${i + 1}`);
        document.write(`${users[i]}<br>`);
        i++;
    }
    