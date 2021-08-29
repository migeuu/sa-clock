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
let titleProduct = document.getElementById("title-product").innerHTML;
let priceProduct = document.getElementById("price-product").innerHTML;
let sizeProduct;
let quantityProduct = document.getElementById("quantity");

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

searchBar.addEventListener("click", function () {
  searchBar.style.border = "1px solid white";
});

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
  if(sizeProduct == null){
    alert("Selecione um tamanho!")
    return false
  }
  cart.push({
    name:titleProduct,
    price:priceProduct,
    size:sizeProduct,
    quantity:quantityProduct.value
  })
  userLogged.push(cart)
  localStorage.setItem("userLogged", JSON.stringify(userLogged))
}