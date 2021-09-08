let users = [
  {
    user: "Miguel",
    password: "123",
  },
  {
    user: "Cauan",
    password: "2222",
  },
  {
    user: "João",
    password: "3333",
  },
  {
    user: "William",
    password: "4444",
  },
];

let userInp = document.getElementById("userAdm");
let passwordInp = document.getElementById("passwordAdm");
let logged;

function loginAdm() {
  logged = 0;
  for (i = 0; i < users.length; i++) {
    if (userInp.value == users[i].user && passwordInp.value == users[i].password) {
      logged = 1;
    }
  }

  if ((logged == 1)) {
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
        window.location.href = "indexADM.html";
      }
    });
  } else if ((logged == 0)) {
    Swal.fire({
      icon: "error",
      title: "Acesso negado",
      text: "Parece que " + userInp.value + " não é um ADM.",
      confirmButtonText: "Voltar",
      confirmButtonColor: "red",
      showCloseButton: "true",
    });
  }
}
