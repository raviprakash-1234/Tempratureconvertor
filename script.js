// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Event listener for the Convert button
document.getElementById('convert-button').addEventListener('click', function() {
    const celsiusInput = document.getElementById('temp-input').value;
    if (celsiusInput !== '') {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = celsiusToFahrenheit(celsius);
        document.getElementById('result').innerHTML = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert('Please enter a temperature in Celsius.');
    }
});
