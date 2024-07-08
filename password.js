const slider = document.getElementById('slider');
const lengthValue = document.getElementById("characterLength");
let length2 = Math.floor(slider.value); // Usar el valor inicial del slider

slider.addEventListener('input', function() {
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    length2 = Math.floor(slider.value); // Actualizar la longitud según el slider
    lengthValue.innerHTML = length2; // Mostrar la longitud actual
    slider.style.background = `linear-gradient(to right, #00ff00 ${value}%, #000000 ${value}%)`;
});

let newPassword = document.querySelector('.pass');
let generatePasswordButton = document.getElementById("generatePassword");

let upperCase = "";
let lowerCase = "";
let numbers = "";
let symbols = "";

// Manejadores de eventos para los checkboxes
const upperCaseCheckBox = document.getElementById('c1');
const lowerCaseCheckBox = document.getElementById('c2');
const numbersCheckBox = document.getElementById('c3');
const symbolsCheckBox = document.getElementById('c4');

upperCaseCheckBox.addEventListener('change', function() {
    upperCase = this.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
});

lowerCaseCheckBox.addEventListener('change', function() {
    lowerCase = this.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
});

numbersCheckBox.addEventListener('change', function() {
    numbers = this.checked ? "0123456789" : "";
});

symbolsCheckBox.addEventListener('change', function() {
    symbols = this.checked ? "!@#$%^&*()_+~|}{[]:;?><,./-=" : "";
});

// Función para generar una contraseña aleatoria
function generateRandomPassword(length) {
    let charset = upperCase + lowerCase + numbers + symbols;
    let charsetLength = charset.length;
    let password = '';

    if (charsetLength === 0) {
        return "Selecciona al menos un tipo de carácter y su longitud";
    }

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
        password += charset.charAt(randomValues[i] % charsetLength);
    }

    return password;
}

generatePasswordButton.addEventListener('click', () => {
    const password = generateRandomPassword(length2);
    newPassword.textContent = password;
    console.log(password);
});
