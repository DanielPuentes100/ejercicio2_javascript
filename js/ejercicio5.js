function toggleVisibility(button) {
   
    const paragraph = button.previousElementSibling;

    
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.textContent = "Ocultar contenidos";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Mostrar contenidos";
    }
}
