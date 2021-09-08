let users = JSON.parse(localStorage.getItem("users"));
let userLogged = JSON.parse(localStorage.getItem("userLogged"));
let totalPrice = JSON.parse(localStorage.getItem("total-price"));
const productCart = document.getElementById("product-cart");
const priceToPay = document.getElementById("price-to-pay");
const bsContainer = document.getElementById("bs-container");
const ccContainer = document.getElementById("cc-container");
let loginAccount = document.getElementById("login-account");
let payMethod;

function changePayMethod() {
  payMethod = document.getElementById("payment-method").value;
  if (payMethod == "bank-slip") {
    bsContainer.style.display = "flex";
    bsContainer.style.flexDirection = "column";
    ccContainer.style.display = "none";
  } else {
    ccContainer.style.display = "flex";
    ccContainer.style.flexDirection = "column";
    bsContainer.style.display = "none";
  }
}

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

function backCart() {
  window.location.href = "cart.html";
}

function confirmPayment() {
  localStorage.removeItem("total-price");
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]){
      for (j = 6; j < users[i].length; j++){
        users[i].length = 6
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users))
  Swal.fire({
    icon: 'success',
    title: 'Compra concluída',
    text: 'Parabéns, sua compra foi registrada, o prazo de entrega é de até 15 dias utéis.',
    footer: 'Obrigado pela sua compra!',
    icon: 'success',
    confirmButtonText: '<a style="color: white; text-decoration: none" href="index.html">Confirmar</a>',
    confirmButtonColor: 'green'
  })
}

function returnCartInfo() {
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
      for (j = 6; j < users[i].length; j++) {
        const product = `
          <p>${users[i][j].name} - R$${users[i][j].price}</p>
          `;
        productCart.innerHTML += product;
      }
      const priceIndicator = `${totalPrice}`;
      priceToPay.innerHTML += priceIndicator;
    }
  }
}
