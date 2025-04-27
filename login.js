function login() {
  let enteredUsername = document.getElementById("loginUsername").value;
  let enteredPassword = document.getElementById("loginPassword").value;

  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (
    savedUser &&
    enteredUsername === savedUser.username &&
    enteredPassword === savedUser.password
  ) {
    localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
    alert("Успешный вход");
    window.location.href = "shop.html";
  } else {
    alert("Неверные данные");
  }
}
function handleLoginLogout() {
  let loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    localStorage.removeItem("loggedInUser");
    alert("Вы вышли из аккаунта");
    window.location.href = "login.html";
  } else {
    window.location.href = "login.html";
  }
}



