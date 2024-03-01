// script.js
const correctPassword = "MARTE"; // Cambia esto a tu clave secreta

function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    
    if (passwordInput === correctPassword) {
        window.location.href = "page1.html"; // Cambia a la página que desees
    } else {
        alert("X");
    }
}

const correctPassword1 = "Lepidus"; // Cambia esto a tu clave secreta

function checkPassword1() {
    const passwordInput1 = document.getElementById("password1").value;
    
    if (passwordInput1 === correctPassword1) {
        window.location.href = "spqr.html"; // Cambia a la página que desees
    } else {
        alert("Incorrect");
    }
}

const correctPassword2 = "SOL"; // Cambia esto a tu clave secreta

function checkPassword2() {
    const passwordInput2 = document.getElementById("password2").value;
    
    if (passwordInput2 === correctPassword2) {
        window.location.href = "main.html"; // Cambia a la página que desees
    } else {
        alert("Incorrect");
    }
}

const correctPasswordColum = "DXIVI"; // Cambia esto a tu clave secreta

function checkPasswordColum() {
    const passwordInputColum = document.getElementById("passwordColum").value;
    
    if (passwordInputColum === correctPasswordColum) {
        alert("NUMERUS TURUS EST   V");
    } else {
        alert("Incorrect");
    }
}

