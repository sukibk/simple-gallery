const smallImages = document.querySelector(".small-img-cont");
const bigImage = document.querySelector(".big-img");

smallImages.addEventListener("click", (e) => {
  const smallImg = e.target.src;
  e.target.src = bigImage.src;
  bigImage.src = smallImg;
});
