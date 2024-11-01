document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById("position").textContent = `Posición del puntero: X: ${x}, Y: ${y}`;
});
