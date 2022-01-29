const rippleButton = document.querySelector(".main-btn");  /*Import the button*/

/*What to do when the "mouseover" (cursor hover) event is triggered*/
rippleButton.addEventListener("mouseover", (event) => {
    // event.pageX basically determines the position of the cursor from the left of the window along the x-axis
    // By using the "rippleButton.offsetLeft" with instanceof, we are setting the starting position from the left of the window to the left of "rippleButton", i.e., our basic button
    const x = event.pageX - rippleButton.offsetLeft;
    const y = event.pageY - rippleButton.offsetTop;

    // Now we attach the beginning of the ripple effect inside the button to the position of the cursor while hovering over the button
    // The variables --xCoord and --yCoord have been pre-defined in our css file (lines 35 and 36)
    // We insert the value of the x and y coordinates (x, y) of the cursor in relation to the button, to the variables defined in the css file to mark the position of the beginning of the ripple effect
    rippleButton.style.setProperty("--xCoord", x + "px");
    rippleButton.style.setProperty("--yCoord", y + "px");
});