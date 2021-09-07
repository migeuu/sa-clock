let nameRegister = document.getElementById("nameRegister");
let dateRegister = document.getElementById("dateRegister");
let userRegister = document.getElementById("user");
let passwordRegister = document.getElementById("pass");
let emailRegister = document.getElementById("email");
let eye = document.getElementById("eye");

let userLogin = document.getElementById("userLog");
let passwordLogin = document.getElementById("passwordLog");

let userSearch = document.getElementById("userSearch");
let userSearchTemp;
let passwordSearch = document.getElementById("passwordSearch");
let passwordSearchTemp;
let emailSearch = document.getElementById("emailSearch");
let emailSearchTemp;

let userDelete = document.getElementById("userDelete");

let positionSearch;

let users = [];
let userLogged = [];
let balance = 0;

function register() {
  users = JSON.parse(localStorage.getItem("users"));
  if (users == null) {
    users = [];

    users.push([
      nameRegister.value,
      dateRegister.value,
      userRegister.value,
      emailRegister.value,
      passwordRegister.value,
      {
        balance: balance,
      },
    ]);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "login.html";
    return false;
  } else {
    for (i = 0; i < users.length; i++) {
      if (
        userRegister.value == users[i][2] ||
        emailRegister.value == users[i][3]
      ) {
        alert("Usuário já existente!");
        return false;
      } else {
        users.push([
          nameRegister.value,
          dateRegister.value,
          userRegister.value,
          emailRegister.value,
          passwordRegister.value,
          {
            balance: balance,
          },
        ]);

        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "login.html";
        return false;
      }
    }
  }
}

function login() {
  let logged = 0;
  users = JSON.parse(localStorage.getItem("users"));
  for (i = 0; i < users.length; i++) {
    if (userLogin.value == users[i][2] && passwordLogin.value == users[i][4]) {
      logged = 1;
      userLogged = [];
      userLogged.push(users[i][2]);
      localStorage.setItem("userLogged", JSON.stringify(userLogged));
    }
  }

  if (logged == 1) {
    Swal.fire({
      icon: "success",
      title: "Acesso autorizado",
      confirmButtonText: "Página Inicial",
      confirmButtonColor: "green",
      showDenyButton: "true",
      denyButtonText: "Acessar conta",
      denyButtonColor: "#b1b1b1",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "index.html";
      } else if (result.isDenied) {
        window.location.href = "accountpage.html";
      }
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Acesso negado",
      text: "Usuario ou senha inválidos!",
      confirmButtonText: "Voltar",
      confirmButtonColor: "#b1b1b1",
      showCloseButton: "true",
    });
  }
}

function list() {
  users = JSON.parse(localStorage.getItem("users"));
  let lista = "";

  for (i = 0; i < users.length; i++) {
    lista =
      lista + users[i][2] + " - " + users[i][3] + " - " + users[i][4] + "<br>";
  }

  document.getElementById("baixo").innerHTML = lista;
}

function deleteUser() {
  users = JSON.parse(localStorage.getItem("users"));
  let positionDelete;
  for (i = 0; i < users.length; i++) {
    if (userDelete.value == users[i][2]) {
      positionDelete = i;

      users.splice(positionDelete, 1);

      alert("Usuário excluído!");
      if (users.length == 0) {
        localStorage.removeItem("users");
      } else {
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  }
  document.getElementById("userDelete").value = "";

  let lista = "";

  for (i = 0; i < users.length; i++) {
    lista =
      lista + users[i][2] + " - " + users[i][3] + " - " + users[i][4] + "<br>";
  }

  document.getElementById("baixo").innerHTML = lista;
}

function search() {
  users = JSON.parse(localStorage.getItem("users"));

  let found = 0;

  for (i = 0; i < users.length; i++) {
    if (
      userSearch.value == users[i][2] ||
      emailSearch.value == users[i][3] ||
      passwordSearch.value == users[i][4]
    ) {
      found = 1;
      positionSearch = i;
    }
  }

  if (found == 1) {
    document.getElementById("userSearch").value = users[positionSearch][2];
    document.getElementById("emailSearch").value = users[positionSearch][3];
    document.getElementById("passwordSearch").value = users[positionSearch][4];
  } else {
    alert("Usuário não encontrado!");
    document.getElementById("userSearch").value = "";
  }
}

function selectUser() {
  userSearchTemp = userSearch.value;
  emailSearchTemp = emailSearch.value;
  passwordSearchTemp = passwordSearch.value;
}

function editUser() {
  users = JSON.parse(localStorage.getItem("users"));
  for (i = 0; i < users.length; i++) {
    if (userSearchTemp == users[i][2]) {
      users[i].splice(2, 1, userSearch.value);
    }
    if (emailSearchTemp == users[i][3]) {
      users[i].splice(3, 1, emailSearch.value);
    }
    if (passwordSearchTemp == users[i][4]) {
      users[i].splice(4, 1, passwordSearch.value);
    }
    userSearchTemp == null;
    emailSearchTemp == null;
    passwordSearchTemp == null;
  }

  localStorage.setItem("users", JSON.stringify(users));
  alert("Dados atualizados!");
}

function seePasswordRegister() {
  if (passwordRegister.type == "password") {
    passwordRegister.type = "text";
    eye.className = "far fa-eye";
  } else {
    passwordRegister.type = "password";
    eye.className = "far fa-eye-slash";
  }
}

function seePasswordLogin() {
  if (passwordLogin.type == "password") {
    passwordLogin.type = "text";
    eye.className = "far fa-eye";
  } else {
    passwordLogin.type = "password";
    eye.className = "far fa-eye-slash";
  }
}
