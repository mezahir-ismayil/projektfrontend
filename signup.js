document.getElementById("createAccountBtn").onclick = function () {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("signupUsername").value;
  let password = document.getElementById("signupPassword").value;

  let user = {
    name: name,
    surname: surname,
    email: email,
    username: username,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Успешная регистрация!");
  window.location.href = "login.html";
};
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
