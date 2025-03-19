/**
 * @file movimientos.js
 * @description Controla la animación del formulario entre Sign In y Sign Up.
 * @author Kevin, Juan y Diego
 */

/** 
 * Botón de Sign Up
 * @type {HTMLElement} 
 */
const signUpButton = document.getElementById('signUp');

/** 
 * Botón de Sign In
 * @type {HTMLElement} 
 */
const signInButton = document.getElementById('signIn');

/** 
 * Contenedor principal del formulario
 * @type {HTMLElement} 
 */
const container = document.getElementById('container');

/**
 * Evento cuando el usuario hace clic en "Sign Up"
 * Agrega la clase 'right-panel-active' para mostrar el formulario de registro.
 */
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

/**
 * Evento cuando el usuario hace clic en "Sign In"
 * Remueve la clase 'right-panel-active' para mostrar el formulario de inicio de sesión.
 */
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
