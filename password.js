const crypto = require('crypto');

// Función para generar una contraseña aleatoria en Node.js
function generateRandomPassword(length) {
    // Conjunto de caracteres que se pueden usar en la contraseña
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const charsetLength = charset.length;
    let password = '';

    // Usamos crypto.randomBytes para obtener valores aleatorios seguros
    const randomBytes = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
        // Usamos los valores aleatorios para seleccionar caracteres del charset
        password += charset[randomBytes[i] % charsetLength];
    }

    return password;
}

// Ejemplo de uso: generar una contraseña de 12 caracteres
const password = generateRandomPassword(12);
console.log(password);

