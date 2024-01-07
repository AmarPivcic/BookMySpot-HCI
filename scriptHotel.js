var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

function closepopup() {
  var blur = document.getElementById("blur");
  var body = document.getElementById("body");
  blur.classList.add("hidden");
  body.classList.remove("stop-scrolling");
}
function showPopUp() {
  var blur = document.getElementById("blur");
  var body = document.getElementById("body");

  blur.classList.remove("hidden");
  body.classList.add("stop-scrolling");
  window.scrollTo(0, 0);
}


function closepopupCjenovnik() {
  var blur = document.getElementById("blurCjenovnik");
  var body = document.getElementById("body");
  blur.classList.add("hiddenCjenovnik");
  body.classList.remove("stop-scrolling");
}
function showPopUpCjenovnik() {
  var blur = document.getElementById("blurCjenovnik");
  var body = document.getElementById("body");

  blur.classList.remove("hiddenCjenovnik");
  body.classList.add("stop-scrolling");
  window.scrollTo(0, 0);
}

function closepopupObrve() {
  var blur = document.getElementById("blurObrve");
  var body = document.getElementById("body");
  blur.classList.add("hiddenObrve");
  body.classList.remove("stop-scrolling");
}
function showPopUpObrve() {
  var blur = document.getElementById("blurObrve");
  var body = document.getElementById("body");

  blur.classList.remove("hiddenObrve");
  body.classList.add("stop-scrolling");
  window.scrollTo(0, 0);
}

function closepopupCjenovnikVanSezonske() {
  var blur = document.getElementById("blurCjenovnikVanSezonske");
  var body = document.getElementById("body");
  blur.classList.add("hiddenCjenovnikVanSezonske");
  body.classList.remove("stop-scrolling");
}
function showPopUpVanSezonske() {
  var blur = document.getElementById("blurCjenovnikVanSezonske");
  var body = document.getElementById("body");

  blur.classList.remove("hiddenCjenovnikVanSezonske");
  body.classList.add("stop-scrolling");
  window.scrollTo(0, 0);
}

function closepopupSezonske() {
  var blur = document.getElementById("blurSezonske");
  var body = document.getElementById("body");
  blur.classList.add("hiddenSezonske");
  body.classList.remove("stop-scrolling");
}
function showPopUpSezonske() {
  var blur = document.getElementById("blurSezonske");
  var body = document.getElementById("body");

  blur.classList.remove("hiddenSezonske");
  body.classList.add("stop-scrolling");
  window.scrollTo(0, 0);
}
