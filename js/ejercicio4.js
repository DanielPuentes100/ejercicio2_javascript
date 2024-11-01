function addEmployee() {
 
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;

   
    if (codigo === "" || nombre === "") {
        alert("Por favor, ingresa tanto el código como el nombre del empleado.");
        return;
    }

   
    const table = document.getElementById("employeeTable");
    const newRow = table.insertRow();

    // Crear celdas para el código y el nombre
    const codeCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);

   
    codeCell.textContent = codigo;
    nameCell.textContent = nombre;

    document.getElementById("codigo").value = "";
    document.getElementById("nombre").value = "";
}
