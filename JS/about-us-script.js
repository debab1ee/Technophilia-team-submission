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
// End of about us text