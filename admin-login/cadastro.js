let userRegister = document.getElementById("user");
let passwordRegister = document.getElementById("pass");
let emailRegister = document.getElementById("email");

let userLogin = document.getElementById("userLog");
let passwordLogin = document.getElementById("passwordLog");

let userSearch = document.getElementById("userSearch");
let passwordSearch = document.getElementById("passwordSearch");
let emailSearch = document.getElementById("emailSearch");

let userDelete = document.getElementById("excluir");

let positionSearch;

let users = [];
let passwords = [];
let email = [];

function Cadastrar() {
  users = JSON.parse(localStorage.getItem("cadastro_usuario"));
  passwords = JSON.parse(localStorage.getItem("cadastro_senha"));

  if (users == null) {
    users = [];
    passwords = [];
    email = [];

    users.push(userRegister.value);
    passwords.push(passwordRegister.value);
    email.push(emailRegister.value);

    localStorage.setItem("cadastro_usuario", JSON.stringify(users));
    localStorage.setItem("cadastro_senha", JSON.stringify(passwords));
    localStorage.setItem("cadastro_email", JSON.stringify(email));
  } else {
    users.push(userRegister.value);
    passwords.push(passwordRegister.value);
    email.push(emailRegister.value);

    localStorage.setItem("cadastro_usuario", JSON.stringify(users));
    localStorage.setItem("cadastro_senha", JSON.stringify(passwords));
    localStorage.setItem("cadastro_email", JSON.stringify(email));
  }

  alert("Seu cadastro foi efetuado com sucesso!");
  window.location.href = "user.html";
}

function Logar() {
  users = JSON.parse(localStorage.getItem("cadastro_usuario"));
  passwords = JSON.parse(localStorage.getItem("cadastro_senha"));
  email = JSON.parse(localStorage.getItem("cadastro_email"));

  let logged = 0;

  for (i = 0; i < users.length; i++) {
    if (userLogin.value == users[i] && passwordLogin.value == passwords[i]) {
      logged = 1;
    }
  }

  if (logged == 1) {
    alert("Login efetuado!");
    window.location.href = "index.html";
  } else {
    alert("Login falhou!");
  }
}

function Listar() {
  users = JSON.parse(localStorage.getItem("cadastro_usuario"));
  passwords = JSON.parse(localStorage.getItem("cadastro_senha"));
  email = JSON.parse(localStorage.getItem("cadastro_email"));

  let lista = "";

  for (i = 0; i < users.length; i++) {
    lista = lista + users[i] + " - " + passwords[i] + " - " + email[i] + "<br>";
  }

  document.getElementById("baixo").innerHTML = lista;
}

function Excluir() {
  users = JSON.parse(localStorage.getItem("cadastro_usuario"));
  passwords = JSON.parse(localStorage.getItem("cadastro_senha"));
  email = JSON.parse(localStorage.getItem("cadastro_email"));

  let positionDelete;

  for (i = 0; i < users.length; i++) {
    if (userDelete.value == users[i]) {
      positionDelete = i;

      users.splice(positionDelete, 1);
      passwords.splice(positionDelete, 1);
      email.splice(positionDelete, 1);

      alert("Usuário excluído!");

      localStorage.setItem("cadastro_usuario", JSON.stringify(users));
      localStorage.setItem("cadastro_senha", JSON.stringify(passwords));
      localStorage.setItem("cadastro_email", JSON.stringify(email));
    }
  }
  document.getElementById("excluir").value = "";
}

function Searchr() {
  users = JSON.parse(localStorage.getItem("cadastro_usuario"));
  passwords = JSON.parse(localStorage.getItem("cadastro_senha"));
  email = JSON.parse(localStorage.getItem("cadastro_email"));

  let found = 0;

  for (i = 0; i < users.length; i++) {
    if (userSearch.value == users[i]) {
      found = 1;
      positionSearch = i;
    }
  }

  if (found == 1) {
    document.getElementById("userSearch").value = users[positionSearch];
    document.getElementById("passwordSearch").value = passwords[positionSearch];
    document.getElementById("emailSearch").value = email[positionSearch];
  } else {
    alert("Usuário não encontrado!");
    document.getElementById("userPequisa").value = ''
  }
}

function Atualizar() {
  users.splice(positionSearch, 1, userSearch.value);
  passwords.splice(positionSearch, 1, passwordSearch.value);
  email.splice(positionSearch, 1, emailSearch.value);

  localStorage.setItem("cadastro_usuario", JSON.stringify(users));
  localStorage.setItem("cadastro_senha", JSON.stringify(passwords));
  localStorage.setItem("cadastro_email", JSON.stringify(email));

  alert("Dados atualizados!");
}
