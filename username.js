function handleLoginLogout() {
  localStorage.removeItem("loggedInUser");
  alert("Вы вышли из аккаунта");
  window.location.href = "login.html";
}

window.onload = function () {
  let loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  let loginLogoutBtn = document.getElementById("loginLogoutBtn");
  let usernameDisplay = document.getElementById("username");

  if (loggedUser) {
    if (usernameDisplay) {
      usernameDisplay.textContent = loggedUser.username;
    }

    if (loginLogoutBtn) {
      loginLogoutBtn.textContent = "log out";
      loginLogoutBtn.onclick = handleLoginLogout;
    }
  } else {
    if (usernameDisplay) {
      usernameDisplay.textContent = "username";
    }

    if (loginLogoutBtn) {
      loginLogoutBtn.textContent = "log in";
      loginLogoutBtn.onclick = function () {
        window.location.href = "login.html";
      };
    }
  }

  if (document.getElementById("name")) {
    document.getElementById("name").textContent = loggedUser ? loggedUser.name : "";
  }
  if (document.getElementById("surname")) {
    document.getElementById("surname").textContent = loggedUser ? loggedUser.surname : "";
  }
  if (document.getElementById("email")) {
    document.getElementById("email").textContent = loggedUser ? loggedUser.email : "";
  }
  if (document.getElementById("userUsername")) {
    document.getElementById("userUsername").textContent = loggedUser ? loggedUser.username : "";
  }

  let userButton = document.querySelector('a[href="user.html"]');
  if (userButton) {
    userButton.onclick = function (event) {
      event.preventDefault(); 
      if (loggedUser) {
        window.location.href = "user.html";
      } else {
        alert("Пожалуйста, войдите в аккаунт.");
        window.location.href = "login.html";
      }
    };
  }
};

