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
    const password = generateRandomPassword(12);
    newPassword.textContent  = password;
    console.log(password);
});