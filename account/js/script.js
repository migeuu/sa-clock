let users = JSON.parse(localStorage.getItem("users"));
let userLogged = JSON.parse(localStorage.getItem("userLogged"));
const infoContainer = document.getElementById("info-container");
let editBtn;
let editIcon;
let infoInput = [];

function logout() {
  Swal.fire({
    title: "Deseja sair de sua conta?",
    confirmButtonText: "Sim",
    confirmButtonColor: "green",
    showCancelButton: "true",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("userLogged");
      window.location.href = "login.html";
    }
  });
}

function deleteUser() {
  Swal.fire({
    icon: "warning",
    title: "Excluir conta",
    text: "Você tem certeza que deseja excluir seu usuário?",
    confirmButtonText: "Sim tenho certeza",
    confirmButtonColor: "green",
    showDenyButton: "true",
    denyButtonText: "Não tenho certeza",
    showCloseButton: "true",
  }).then((result) => {
    if (result.isConfirmed) {
      for (i = 0; i < users.length; i++) {
        if (userLogged[0] == users[i][2]) {
          positionDelete = i;
          if (users.length > 1) {
            users.splice(positionDelete, 1);
            localStorage.removeItem("userLogged");
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "login.html";
          } else {
            users.splice(positionDelete, 1);
            localStorage.removeItem("userLogged");
            localStorage.removeItem("users");
            window.location.href = "login.html";
          }
        }
      }
    } else if (result.isDenied) {
      window.location.href = "accountpage.html";
    }
  });
}

function accountUser() {
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
      const userInfo = `            
      <form>
        <div class="info-personal">
          <label>Nome Completo:</label>
          <input type="text" name="accountName" id="accountName" value="${users[i][0]}" readonly>
        </div>
        <div class="info-personal">
          <label>Data de nascimento:</label>
          <input type="date" name="accountDate" id="accountDate" value="${users[i][1]}" readonly>
        </div>
        <div class="info-personal">
            <label>Usuário:</label>
            <input type="text" name="accountUsername" id="accountUsername" value="${users[i][2]}" readonly>
        </div>
        <div class="info-personal">
            <label>E-mail:</label>
            <input type="email" name="accountEmail" id="accountEmail" value="${users[i][3]}" readonly>
        </div>
        <div class="info-personal">
            <label>Senha:</label>
            <input type="password" name="accountPassword" id="accountPassword" value="${users[i][4]}" readonly>
        </div>
        <div class="user-tools-container">
            <div class="user-tools">
                <button type="button" id="logout-btn" class="logout-container" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i>
                </button>
                <button type="button" id="edituser-btn" class="edit-info-container" onclick="editAccount()">
                    <i id="edit-icon" class="fas fa-pen"></i>
                </button>
                <button type="button" id="deleteuser-btn" class="delete-user-container" onclick="deleteUser()">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        </form>`;
      infoContainer.innerHTML += userInfo;
      infoInput.push(
        document.getElementById("accountName"),
        document.getElementById("accountDate"),
        document.getElementById("accountUsername"),
        document.getElementById("accountEmail"),
        document.getElementById("accountPassword")
      );
      editBtn = document.getElementById("edituser-btn");
      editIcon = document.getElementById("edit-icon");
    }
  }
}

function editAccount() {
  Swal.fire({
    title: "Editar",
    text: "Deseja editar as informações do seu usuário?",
    showCancelButton: "true",
    confirmButtonText: "Sim",
    confirmButtonColor: "green",
    cancelButtonText: "Cancelar",
    showCloseButton: "true",
  }).then((result) => {
    if (result.isConfirmed) {
      for (i = 0; i < infoInput.length; i++) {
        infoInput[i].removeAttribute("readonly");
        infoInput[i].style.borderBottom = "1px solid green";
      }
      editBtn.setAttribute("onClick", "changeUserData();");
      editIcon.className = "far fa-check-circle";
    }
  });
}

function changeUserData() {
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
      Swal.fire({
        title: "Salvar mudanças?",
        confirmButtonText: "Salvar",
        confirmButtonColor: "green",
        showCancelButton: "true",
        cancelButtonText: "Cancelar",
        showDenyButton: "true",
        denyButtonText: "Não",
        showCloseButton: "true",
      }).then((result) => {
        if (result.isConfirmed) {
          for (i = 0; users.length; i++) {
            if (userLogged[0] == users[i][2]) {
              for (j = 0; j < infoInput.length; j++) {
                users[i][j] = infoInput[j].value;
              }
              localStorage.setItem("users", JSON.stringify(users));
              localStorage.removeItem("userLogged");
              Swal.fire({
                icon: "success",
                title: "Dados atualizado",
                text: "Faça login novamente para confirmar seus dados",
                confirmButtonText:
                  '<a style="text-decoration: none; color: white;" href="login.html">Confirmar</a>',
              });
            }
          }
        }
      });
    }
  }
}
