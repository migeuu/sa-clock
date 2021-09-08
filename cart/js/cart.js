let users = JSON.parse(localStorage.getItem("users"));
let userLogged = JSON.parse(localStorage.getItem("userLogged"));
const productContainer = document.getElementById("product-container");
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let totalPriceIndicator = document.getElementById("total-price-indicator");
let totalPrice = [];
let loginAccount = document.getElementById("login-account");
let buttonList = [];
let botao;
let mainContainer = document.getElementById("main-container");

loginAccount.addEventListener("click", function () {
  enterLoginAccount();
});

function addQuantity() {
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
    }
  }
}

function payment() {
  window.location.href = "payment.html";
}

function enterLoginAccount() {
  userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged != null) {
    loginAccount.href = "accountpage.html";
  } else {
    loginAccount.href = "login.html";
  }
}

function totalPriceCalculator() {
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
      for (j = 5; j < users[i].length; j++) {
        totalPrice.push(users[i][j].quantity * users[i][j].price);
        totalPriceIndicator.innerHTML = totalPrice.reduce(reducer);
      }
      localStorage.setItem(
        "total-price",
        JSON.stringify(totalPriceIndicator.innerHTML)
      );
    }
  }
}

function cleanCart() {
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
      Swal.fire({
        title: "Deseja limpar seu carrinho?",
        confirmButtonText: "Sim",
        confirmButtonColor: "green",
        showCloseButton: "true",
        showCancelButton: "true",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          for (i = 0; i < users.length; i++) {
            if (userLogged[0] == users[i][2]) {
              users[i].length = 5;
            }
          }
          localStorage.setItem("users", JSON.stringify(users));
          localStorage.removeItem("total-price");
          Swal.fire({
            allowOutsideClick: false,
            icon: "success",
            title: "Carrinho limpo",
            confirmButtonText:
              '<a style="text-decoration: none; color: white;" href="index.html">Confirmar</a>',
          });
        }
      });
    }
  }
}

function userCart() {
  if (users != null) {
    for (i = 0; i < users.length; i++) {
      if (userLogged != null) {
        if (userLogged[0] == users[i][2]) {
          if (users[i].length == 5) {
            mainContainer.style.opacity = "0";
            Swal.fire({
              allowOutsideClick: false,
              icon: "warning",
              title: "Carrinho Vazio",
              text: "Seu carrinho está vazio",
              confirmButtonText: "Voltar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "index.html";
              }
            });
            return false;
          }
          for (j = 5; j < users[i].length; j++) {
            const product = `
            <div class="product">
            <div class="product-image-container">
            <div class="product-image">
            <img src="${users[i][j].img}" alt="">
            </div>
            </div>
            <div class="product-info">
            <div class="product-title">
            <p id="title-cart">${users[i][j].name}</p>
            </div>
            <div class="product-size" style="font-weight: 700;">
            <p id="size-cart">${users[i][j].size}</p>
            </div>
            <div class="product-quantity">
            <button onclick="buttonClicked()"><i id="plus-quantity" class="fas fa-chevron-up"></i></button>
            <input type="number" id="${users[i][j].id}" value="${users[i][j].quantity}"
            min="1" max="10" readonly>
            <button><i id="minus-quantity" class="fas fa-chevron-down"></i></button>
            </div>
            <div class="product-price">
            <p style="font-weight: 700;">R$<code id="price-cart">${users[i][j].price}</code></p>
            </div>
            </div>
            </div>
            `;
            productContainer.innerHTML += product;
          }
          totalPriceCalculator();
        }
      } else {
        mainContainer.style.opacity = "0";
        Swal.fire({
          allowOutsideClick: false,
          icon: "error",
          title: "Erro",
          text: "Nenhum usuário identificado, por favor faça login",
          confirmButtonText:
            '<a style="text-decoration: none; color: white;" href="login.html">Login</a>',
          confirmButtonColor: "green",
          showCancelButton: "true",
          cancelButtonColor: "#b1b1b1",
          cancelButtonText:
            '<a style="text-decoration: none; color: white;" href="index.html">Voltar</a>',
        });
      }
    }
  } else {
    mainContainer.style.opacity = "0";
    Swal.fire({
      allowOutsideClick: false,
      icon: "error",
      title: "Erro",
      text: "Nenhum usuário identificado, por favor faça login",
      confirmButtonText:
        '<a style="text-decoration: none; color: white;" href="login.html">Login</a>',
      confirmButtonColor: "green",
      showCancelButton: "true",
      cancelButtonColor: "#b1b1b1",
      cancelButtonText:
        '<a style="text-decoration: none; color: white;" href="index.html">Voltar</a>',
    });
  }
}
