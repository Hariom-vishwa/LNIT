// Hamburger

const hamMenu = document.querySelector(".hamMenu")

function openHam() {
  const openHamElement = document.querySelector(".openHam");
  const closeHamElement = document.querySelector(".closeHam");

    openHamElement.style.display = "none";
    closeHamElement.style.display = "block";
    hamMenu.style.display = "flex"

    hamMenu.innerHTML = `
  <a href="#">Home</a>
  <a href="#">Dropdown</a>
  <a href="#">Dropdown</a>
  <a href="#">Dropdown</a>
  <a href="#">About Us</a>
    `

}

function closeHam(){
  const openHamElement = document.querySelector(".openHam");
  const closeHamElement = document.querySelector(".closeHam");
  openHamElement.style.display = "block"
  closeHamElement.style.display = "none"
  hamMenu.style.display = "none"


}



// Carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

// Carousel End

