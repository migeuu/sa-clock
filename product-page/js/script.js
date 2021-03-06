let img = [
  document.getElementById("card1"),
  document.getElementById("card2"),
  document.getElementById("card3"),
];

let container = [
  document.getElementById("card-img1"),
  document.getElementById("card-img2"),
  document.getElementById("card-img3"),
];

let searchBar = document.getElementsByClassName("search-bar");
let mainImage = document.getElementById("big-image");
let userLogged = JSON.parse(localStorage.getItem("userLogged"));
let cart = [];
let idProduct = document.getElementsByClassName("product-container")[0].id;
let imgProduct = document.getElementById("big-image").src;
let titleProduct = document.getElementById("title-product").innerHTML;
let priceProduct = document.getElementById("price-product").innerHTML;
let sizeProduct;
let quantityProduct = document.getElementById("quantity");
let loginAccount = document.getElementById("login-account");
let totalPrice = [];

container[0].addEventListener("click", function () {
  mainImage.src = img[0].src;
  img[0].src = mainImage.src;
});

container[1].addEventListener("click", function () {
  mainImage.src = img[1].src;
  img[1].src = mainImage.src;
});

container[2].addEventListener("click", function () {
  mainImage.src = img[2].src;
  img[2].src = mainImage.src;
});

loginAccount.addEventListener("click", function () {
  enterLoginAccount();
});

function totalPriceStorage() {
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
      for (j = 5; j < users[i].length; j++) {
        totalPrice.push(users[i][j].quantity * users[i][j].price);
      }
      localStorage.setItem("total-price", JSON.stringify(totalPrice))
    }
  }
}

function enterLoginAccount() {
  userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (userLogged != null) {
    loginAccount.href = "accountpage.html";
  } else {
    loginAccount.href = "login.html";
  }
}

function addProd() {
  if (quantityProduct.value == 10) {
    return false;
  }
  quantityProduct.value++;
}

function removeProd() {
  if (quantityProduct.value == 1) {
    return false;
  }
  quantityProduct.value--;
}

function getSelectValue() {
  sizeProduct = document.getElementById("size").value;
}

function buyNow() {
  users = JSON.parse(localStorage.getItem("users"));
  userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (users != null) {
    if (sizeProduct == null) {
      Swal.fire({
        icon: "warning",
        title: "Selecione um tamanho",
        text: "Selecione o tamanho do produto para continuar comprando",
        confirmButtonText: "Ok",
      });
      return false;
    }
    for (i = 0; i < users.length; i++) {
      if (userLogged != null) {
        if (userLogged[0] == users[i][2]) {
          cart = {
            id: idProduct,
            img: imgProduct,
            name: titleProduct,
            price: priceProduct,
            size: sizeProduct,
            quantity: quantityProduct.value,
          };
          users[i].push(cart);
          Swal.fire({
            icon: "success",
            title: "Produto adicionado ao carrinho",
            confirmButtonText: "Continuar comprando",
            showDenyButton: "true",
            denyButtonText: "Finalizar Compra",
            denyButtonColor: "#b1b1b1",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "index.html";
            } else if (result.isDenied) {
              window.location.href = "payment.html";
            }
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Usu??rio n??o encontrado",
          text: "N??o foi poss??vel encontrar um usu??rio com o login efetuado, por favor efetue login para continuar comprando",
          confirmButtonText: "Login",
          confirmButtonColor: "green",
          showDenyButton: "true",
          denyButtonText: "Voltar",
          denyButtonColor: "#b1b1b1",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "login.html";
          }
        });
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
    totalPriceStorage();
  } else {
    Swal.fire({
      icon: "error",
      title: "Usu??rio n??o encontrado",
      text: "N??o foi poss??vel encontrar um usu??rio com o login efetuado, por favor efetue login para continuar comprando",
      confirmButtonText: "Login",
      confirmButtonColor: "green",
      showDenyButton: "true",
      denyButtonText: "Voltar",
      denyButtonColor: "#b1b1b1",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "login.html";
      }
    });
  }
}

function addCart() {
  users = JSON.parse(localStorage.getItem("users"));
  userLogged = JSON.parse(localStorage.getItem("userLogged"));
  if (users != null) {
    if (sizeProduct == null) {
      Swal.fire({
        icon: "warning",
        title: "Selecione um tamanho",
        text: "Selecione o tamanho do produto para continuar comprando",
        confirmButtonText: "Ok",
      });
      return false;
    }
    for (i = 0; i < users.length; i++) {
      if (userLogged != null) {
        if (userLogged[0] == users[i][2]) {
          cart = {
            id: idProduct,
            img: imgProduct,
            name: titleProduct,
            price: priceProduct,
            size: sizeProduct,
            quantity: quantityProduct.value,
          };
          users[i].push(cart);
          Swal.fire({
            icon: "success",
            title: "Produto adicionado ao carrinho",
            confirmButtonText: "Continuar comprando",
            showDenyButton: "true",
            denyButtonText: "Acessar carrinho",
            denyButtonColor: "#b1b1b1",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "index.html";
            } else if (result.isDenied) {
              window.location.href = "cart.html";
            }
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Usu??rio n??o encontrado",
          text: "N??o foi poss??vel encontrar um usu??rio com o login efetuado, por favor efetue login para continuar comprando",
          confirmButtonText: "Login",
          confirmButtonColor: "green",
          showDenyButton: "true",
          denyButtonText: "Voltar",
          denyButtonColor: "#b1b1b1",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "login.html";
          }
        });
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
    totalPriceStorage();
  } else {
    Swal.fire({
      icon: "error",
      title: "Usu??rio n??o encontrado",
      text: "Por favor efetue login para continuar comprando",
      confirmButtonText: "Login",
      confirmButtonColor: "green",
      showDenyButton: "true",
      denyButtonText: "Voltar",
      denyButtonColor: "#b1b1b1",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "login.html";
      }
    });
  }
}