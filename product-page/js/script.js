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
let imgProduct = document.getElementById("big-image").src;
let titleProduct = document.getElementById("title-product").innerHTML;
let priceProduct = document.getElementById("price-product").innerHTML;
let sizeProduct;
let quantityProduct = document.getElementById("quantity");
let loginAccount = document.getElementById("login-account")

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

loginAccount.addEventListener("click", function(){
  enterLoginAccount();
})

function enterLoginAccount() {
  userLogged = JSON.parse(localStorage.getItem("userLogged"))
  if(userLogged != null){
      loginAccount.href = "accountpage.html"
  } else {
      loginAccount.href = "login.html"
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
  sizeProduct = document.getElementById("size").value
}

function addCart() {
  users = JSON.parse(localStorage.getItem("users"))
  userLogged = JSON.parse(localStorage.getItem("userLogged"))
  if (sizeProduct == null) {
    alert("Selecione um tamanho!")
    return false
  }
  for (i = 0; i < users.length; i++) {
    if (userLogged[0] == users[i][2]) {
      cart = {
        img: imgProduct,
        name: titleProduct,
        price: priceProduct,
        size: sizeProduct,
        quantity: quantityProduct.value
      }
      users[i].push(cart)
    }
  }
  localStorage.setItem("users", JSON.stringify(users))
}