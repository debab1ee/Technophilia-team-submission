//Mouse cicle code
const mouseCircle = document.getElementById("mouse-circle");
const mouseDot = document.getElementById("mouse-dot");

const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
  mouseDot.style.cssText = `top:${y}px; left: ${x}px; opacity: 1`;
};
//End of mouse circle code

//Animated circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");
const trans = 30;

let mX = 0;
let mY = 0;

const animateCircles = (e, x, y) => {
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.left = `${trans}px`;
    });
    mainImg.style.left = `${trans}px`;
  } else if (x > mX) {
    circles.forEach((circle) => {
      circle.style.left = `-${trans}px`;
    });
    mainImg.style.left = `-${trans}px`;
  }

  if (y < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${trans}px`;
    });
    mainImg.style.top = `${trans}px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${trans}px`;
    });
    mainImg.style.top = `-${trans}px`;
  }

  mX = e.clientY;
  mY = e.clientY;
};
//End of animated circles

//Mouse move event
document.body.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCircleFn(x, y);
  animateCircles(e, x, y);
});

document.body.addEventListener("mouseleave", () => {
  mouseCircle.style.opacity = "0";
  mouseDot.style.opacity = "0";
});

// Main Button
const mainBtns = document.querySelectorAll(".main-btn");
mainBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
  });

  btn.addEventListener("mouseleave", () => {
    btn.removeChild(ripple);
  });
});

let ripple;
// End of main button

// About us text
const aboutUsText = document.querySelector(".about-us-text");
const aboutUsTextContent = "Some cool name";

Array.from(aboutUsTextContent).forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  aboutUsText.appendChild(span);

  span.addEventListener("mouseenter", (e) => {
    e.target.style.animation = "aboutMeTextAnim 0.5s forwards";
  });
  span.addEventListener("mouseleave", (e) => {
    e.target.style.animation = "aboutMeTextAnimOut 3s forwards";
  });
});
// End of about me text
