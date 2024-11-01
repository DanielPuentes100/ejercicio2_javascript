const exchangeRate = 4000; 

function convertToPesos(event) {
    event.preventDefault();
    const dollars = parseFloat(document.getElementById("dollars").value);
    const pesos = dollars * exchangeRate;
    document.getElementById("result").textContent = `Equivalente en pesos: ${pesos}`;
}
