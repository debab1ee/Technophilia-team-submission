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