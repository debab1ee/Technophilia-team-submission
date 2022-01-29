//Mouse circle code
const mouseCircle = document.getElementById("mouse-circle");
const mouseDot = document.getElementById("mouse-dot");

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
    mouseDot.style.cssText = `top:${y}px; left: ${x}px; opacity: 1`;
};
//End of mouse circle code

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

// End of mouse move event
