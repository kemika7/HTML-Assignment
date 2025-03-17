function handleLogin(event) {
    console.log(event, "event");
    event.preventDefault();
    let username = document.getElementById("username").value;
    if (username) {
      // hide login section when user is logged in
      document.getElementsByClassName("login-section")[0].style.display = "none";
      // show user section
      document.getElementsByClassName("user-section")[0].style.display = "block";
      document.getElementById("user-name").textContent = username;
    }
    console.log(username, "hey i am clicked");
  }
  
  function handleLogout() {
    // Show login section
    document.getElementsByClassName("login-section")[0].style.display = "block";
    // Hide user section
    document.getElementsByClassName("user-section")[0].style.display = "none";
    // Optionally, clear the user name text content
    document.getElementById("user-name").textContent = '';
    console.log("User logged out");
  }
  
  // Add event listeners
  document.getElementById("login-form").addEventListener("submit", handleLogin);
  document.getElementById("logout-button").addEventListener("click", handleLogout);