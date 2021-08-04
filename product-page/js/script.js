let index = 0;
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

let mainImage = document.getElementById("big-image");
let tempImage = mainImage;

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
