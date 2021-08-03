const mainImage = document.querySelector(".main-image-container").children;
const subImage1 = document.getElementById("card1");
const subImage2 = document.getElementById("card2");
const subImage3 = document.getElementById("card3");

let index = 0;

subImage1.addEventListener("click", function () {
  changeMainImage();
});

subImage2.addEventListener("click", function () {
  changeMainImage();
});

subImage3.addEventListener("click", function () {
  changeMainImage();
});

function changeMainImage() {
  for (let i = 0; i < mainImage.length; i++) {
    if ((mainImage.className = "active")) {
      mainImage[i].classList.remove("active");
    } else {
      mainImage[i].classList.add("active");
    }
  }
}
