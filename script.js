

function convertirTemperatura()
{
        let celsius = parseFloat(document.getElementById("temperatura").value);

    if (isNaN(celsius)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById("resultado").innerHTML = 
        `${celsius} °C equivalen a ${fahrenheit.toFixed(2)} °F y ${kelvin.toFixed(2)} K`;
}