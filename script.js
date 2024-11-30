// Carousel

const carouselImg = document.querySelectorAll(".carouselImg");
const numbertext = document.querySelectorAll(".numbertext");

carouselImg.forEach((e, i) => {
  e.style.left = `${i * 100}%`;
});

var counter = 0;

function updateNumberText() {
  numbertext.inner.innerHTML = `${counter + 1} / ${carouselImg.length}`;
}

function pre() {
  if (counter == 0) {
    counter = carouselImg.length - 1;
  } else {
    counter--;
  }
  slide();
  updateNumberText();
}

function next() {
  if (counter >= carouselImg.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slide();
  updateNumberText();
}

const slide = () => {
  carouselImg.forEach((carouselImg) => {
    carouselImg.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Carousel End
