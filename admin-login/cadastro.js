let form = document.getElementsByTagName("form")[0];
let nameRegister = document.getElementById("nameRegister")
let dateRegister = document.getElementById("dateRegister")
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

form.addEventListener("submit", function(){
  if(form.id = "formRegister"){
    register();
  } else if (form.id = "formLogin"){
    login()
  }
})

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
    ]);

    localStorage.setItem("users", JSON.stringify(users));
  } else {
    for (i = 0; i < users.length; i++) {
      if (userRegister.value == users[i][2] || emailRegister.value == users[i][3]) {
        alert("Usuário já existente!");
        return false
      } else {
        users.push([
          nameRegister.value,
          dateRegister.value,
          userRegister.value,
          emailRegister.value,
          passwordRegister.value
        ]);

        localStorage.setItem("users", JSON.stringify(users));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "user.html";
        return false
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
    }
  }

  if (logged == 1) {
    alert("Login efetuado!");
    window.location.href = "index.html"
  } else {
    alert("Preencha os campos corretamente");
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

function Search() {
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
    document.getElementById("userPequisa").value = "";
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