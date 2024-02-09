// script.js
const correctPassword = "tuClaveSecreta"; // Cambia esto a tu clave secreta

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    
    if (passwordInput === correctPassword) {
        window.location.href = "page1.html"; // Cambia a la página que desees
    } else {
        alert("Clave incorrecta. Inténtalo de nuevo.");
    }
}

const correctPassword1 = "eta"; // Cambia esto a tu clave secreta

function checkPassword1() {
    const passwordInput1 = document.getElementById("password").value;
    
    if (passwordInput1 === correctPassword1) {
        window.location.href = "page.html"; // Cambia a la página que desees
    } else {
        alert("Clave incorrecta. Inténtalo de nuevo.");
    }
}
