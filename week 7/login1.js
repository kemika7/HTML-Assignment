function handleLogin(event) {
    console.log(event, "event");
    event.preventDefault();
    let username = document.getElementById("username").value;
    if (username) {
      // hide login section when user is logged in
      document.getElementsByClassName("login-section")[0].style.display = "none";
      //show user section
      document.getElementsByClassName("user-section")[0].style.display = "block";
      document.getElementById("user-name").textContent = username;
    }
    console.log(username, "hey i am clicked");
  }
  
  document.getElementById("login-form").addEventListener("submit", handleLogin);