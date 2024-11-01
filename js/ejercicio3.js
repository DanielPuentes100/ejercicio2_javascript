function convertToFahrenheit(event) {
    event.preventDefault(); 

    
    const celsius = parseFloat(document.getElementById("celsius").value);

    
    const fahrenheit = (celsius * 9/5) + 32;

    
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}
