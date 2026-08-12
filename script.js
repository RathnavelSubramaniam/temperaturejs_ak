document.addEventListener("DOMContentLoaded", function () {

    const temperature = document.getElementById("temperature");
    const conversion = document.getElementById("conversion");
    const result = document.getElementById("result");

    document.getElementById("convert").addEventListener("click", function () {

        const value = Number(temperature.value);
        let convertedValue;

        if (conversion.value === "cToF") {

            convertedValue = (value * 9 / 5) + 32;

            result.textContent =
                "Result: " + convertedValue.toFixed(2) + " °F";

        } else {

            convertedValue = (value - 32) * 5 / 9;

            result.textContent =
                "Result: " + convertedValue.toFixed(2) + " °C";
        }
    });

});
