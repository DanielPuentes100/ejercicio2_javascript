
document.addEventListener("mousemove", (event) => {
    const browserCoords = `[${event.clientX}, ${event.clientY}]`;
    const pageCoords = `[${event.pageX}, ${event.pageY}]`;

    document.getElementById("browser-coords").textContent = browserCoords;
    document.getElementById("page-coords").textContent = pageCoords;
});


document.addEventListener("keydown", (event) => {
    const character = `[${event.key}]`;
    const keyCode = `[${event.keyCode}]`;

    document.getElementById("character").textContent = character;
    document.getElementById("key-code").textContent = keyCode;
});
