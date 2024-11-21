// Hamburger

const hamMenu = document.querySelector(".hamMenu");

function openHam() {
  const openHamElement = document.querySelector(".openHam");
  const closeHamElement = document.querySelector(".closeHam");

  openHamElement.style.display = "none";
  closeHamElement.style.display = "block";
  hamMenu.style.transform = "translateY(0)";
  
  hamMenu.innerHTML = `
  <a href="#">Home</a>
  <a href="#">Dropdown</a>
  <a href="#">Dropdown</a>
  <a href="#">Dropdown</a>
  <a href="#">About Us</a>
  `;
}

function closeHam() {
  const openHamElement = document.querySelector(".openHam");
  const closeHamElement = document.querySelector(".closeHam");
  openHamElement.style.display = "block";
  closeHamElement.style.display = "none";
  // hamMenu.style.display = "none";
  hamMenu.style.transform = "translateY(-100vw)";
}
