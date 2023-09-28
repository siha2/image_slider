// variables
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// handle click on buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// the main ul
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.append(document.createTextNode(i));
  paginationElement.append(paginationItem)
}
document.getElementById("indicators").append(paginationElement);

// get the ul
let paginationCreatedUl = document.getElementById("pagination-ul");

// get paginations items
let paginationsBullets = document.querySelectorAll("#pagination-ul li");

// loop through items
for (let i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  }
}

// trigger checker function
theChecker();

// next Slide function
function nextSlide() {
  if (!nextButton.classList.contains("disabled")) {
    currentSlide++;
    theChecker();
  }
}

// previous Slide function
function prevSlide() {
  if (!prevButton.classList.contains("disabled")) {
    currentSlide--;
    theChecker();
  }
}

// create cheker function
function theChecker() {
  slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");
  
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remove active classes function
function removeAllActive() {
  sliderImages.forEach(function (el) {
    el.classList.remove("active");
  });

  paginationsBullets.forEach(function (ele) {
    ele.classList.remove("active");
  })
}