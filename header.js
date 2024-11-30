// Hamburger

const hamMenu = document.querySelector(".hamMenu");

function openHam() {
  const openHamElement = document.querySelector(".openHam");
  const closeHamElement = document.querySelector(".closeHam");

  openHamElement.style.transform = "scale(0)";
  openHamElement.style.right = "0";
  openHamElement.style.top = "50px";
  closeHamElement.style.transform = "scale(1)";
  closeHamElement.style.right = "9px";
  closeHamElement.style.top = "9px";
  hamMenu.style.transform = "translateX(0)";

  hamMenu.innerHTML = `
  <a href="#">Home</a>
  <a href="#">Courses</a>
  <a href="#">Other Courses</a>
  <a href="#">Dropdown</a>
  <a href="#">About Us</a>
  `;
}

function closeHam() {
  const openHamElement = document.querySelector(".openHam");
  const closeHamElement = document.querySelector(".closeHam");
  openHamElement.style.transform = "scale(1)";
  openHamElement.style.right = "5px";
  openHamElement.style.top = "9px";
  closeHamElement.style.transform = "scale(0)";
  closeHamElement.style.right = "0";
  closeHamElement.style.top = "50px";
  hamMenu.style.transform = "translateX(100vw)";
}
