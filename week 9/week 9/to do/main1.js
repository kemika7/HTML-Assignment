let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });
  
  
//   => is arrow function 
// we're gonna make an if else statement inside our formValidation function. This will help us prevent users from submitting blank input fields.
let formValidation = () => {
    // check if the input is empty 
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    } else {
      console.log("successs");
      acceptData();
      msg.innerHTML = "";
    }
  };

  let data = {};
//accept the user input data 
let acceptData = () => {
    data["text"]=input.value
    // Other codes are here
  
    createPost();
  };    

//   templat e literals 
// create post 
  let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };
  let deletePost = (e) => {};
  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };