const fadersUp = document.querySelectorAll(".fade-up");
const fadersDown = document.querySelectorAll(".fade-down");
const fadersLeft = document.querySelectorAll(".fade-left");
const fadersRight = document.querySelectorAll(".fade-right");
const fadersIn = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

fadersUp.forEach((faderUp) => {
  appearOnScroll.observe(faderUp);
});
fadersDown.forEach((faderDown) => {
  appearOnScroll.observe(faderDown);
});
fadersLeft.forEach((faderLeft) => {
  appearOnScroll.observe(faderLeft);
});
fadersRight.forEach((faderRight) => {
  appearOnScroll.observe(faderRight);
});
fadersIn.forEach((faderIn) => {
  appearOnScroll.observe(faderIn);
});

function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("hanan")) {
    image.src = "imgs/card().jpg";
  } else {
    image.src = "imgs/Heads/hanan.png";
  }
}

function changeImage1() {
  var image1 = document.getElementById("myImage1");
  if (image1.src.match("menna")) {
    image1.src = "imgs/card().jpg";
  } else {
    image1.src = "imgs/Heads/menna.png";
  }
}

function changeImage2() {
  var image2 = document.getElementById("myImage2");
  if (image2.src.match("verina")) {
    image2.src = "imgs/card().jpg";
  } else {
    image2.src = "imgs/Heads/verina.png";
  }
}

function changeImage3() {
  var image3 = document.getElementById("myImage3");
  if (image3.src.match("sara")) {
    image3.src = "imgs/card().jpg";
  } else {
    image3.src = "imgs/Heads/sara.png";
  }
}
