const slider = document.getElementById('slider');
const lengthValue = document.getElementById("characterLength");
let length2;

slider.addEventListener('input', function()
{
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    length2 = value/5;
    characterLength.innerHTML = Math.floor(value/5);//Se asegura de redondearlo hacia abajo, ya que en el 11 desplega un número decimal
    slider.style.background = `linear-gradient(to right, #00ff00 ${value}%, #000000 ${value}%)`;
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
let newPassword = document.querySelector('.pass');
let generatePasswordButton = document.getElementById("generatePassword")

// Función para generar una contraseña aleatoria en Node.js
function generateRandomPassword(length) {
    // Conjunto de caracteres que se pueden usar en la contraseña
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><,./-=';
    const charsetLength = charset.length;
    let password = '';

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
        // Usamos los valores aleatorios para seleccionar caracteres del charset
        password += charset.charAt(randomValues[i] % charsetLength);
    }

    return password;
}



generatePasswordButton.addEventListener('click', () => {
    // Ejemplo de uso: generar una contraseña de 12 caracteres
    const password = generateRandomPassword(length2);
    newPassword.textContent  = password;
    console.log(password);
});