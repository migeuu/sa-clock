let loginAccount = document.getElementById("login-account");

loginAccount.addEventListener("click", function () {
  enterLoginAccount();
});

function enterLoginAccount() {
  userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged != null) {
    loginAccount.href = "accountpage.html";
  } else {
    loginAccount.href = "login.html";
  }
}
