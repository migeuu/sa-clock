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
let quantity = document.getElementById("quantity");

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
  searchBar.style.border = "1px solid white"
})

function addProd() {
  if(quantity.value == 10){
    return false
  }
  quantity.value++
}

function removeProd() {
  if(quantity.value == 1){
    return false
  }
  quantity.value--
}