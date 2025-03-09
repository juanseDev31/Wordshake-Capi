/**
 * @file language.js
 * @description Controla la internacionalización de la página entre inglés y español.
 * @author Kevin, Juan y Diego
 */

/**
 * Espera a que el DOM esté completamente cargado antes de ejecutar el código.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Botón para cambiar el idioma
     * @type {HTMLElement}
     */
    const languageToggleButton = document.getElementById('language-toggle');

    /**
     * Evento cuando el usuario hace clic en el botón de cambio de idioma
     * Cambia el idioma del documento y actualiza el contenido de la página.
     */
    languageToggleButton.addEventListener('click', () => {
        // Obtiene el idioma actual del documento
        const currentLang = document.documentElement.lang;
        // Cambia el idioma al opuesto (inglés o español)
        const newLang = currentLang === 'en' ? 'es' : 'en';
        // Establece el nuevo idioma en el documento
        document.documentElement.lang = newLang;
        // Actualiza el contenido de la página al nuevo idioma
        updateLanguage(newLang);
    });

    /**
     * Función para actualizar el contenido de la página según el idioma.
     * @param {string} lang - El idioma al que se va a cambiar (en o es).
     */
    function updateLanguage(lang) {
        // Definición de las traducciones para inglés y español
        const translations = {
            en: {
                mainTitle: 'WordShake Capi',
                createAccountTitle: 'Create Account',
                registrationInfo: 'or use your email for registration',
                createButton: 'Create',
                signInTitle: 'Sign In',
                loginInfo: 'or use your account',
                loginButton: 'Start',
                signIn: 'Sign In',
                signUp: 'Sign Up',
                welcomeBack: 'Welcome Back!',
                loginPrompt: 'To keep connected with us please login with your personal info',
                helloFriend: 'Hello, Friend!',
                registrationPrompt: 'Enter your personal details and start journey with us',
                nameInputPlaceholder: 'Name',
                emailInputPlaceholder: 'Email',
                passwordInputPlaceholder: 'Password',
                loginEmailInputPlaceholder: 'Email',
                loginPasswordInputPlaceholder: 'Password'
            },
            es: {
                mainTitle: 'WordShake Capi',
                createAccountTitle: 'Crear Cuenta',
                registrationInfo: 'o usa tu correo electrónico para registrarte',
                createButton: 'Crear',
                signInTitle: 'Iniciar Sesión',
                loginInfo: 'o usa tu cuenta',
                loginButton: 'Empezar',
                signIn: 'Iniciar Sesión',
                signUp: 'Registrarse',
                welcomeBack: '¡Bienvenido de nuevo!',
                loginPrompt: 'Para mantenerte conectado con nosotros, por favor inicia sesión con tu información personal',
                helloFriend: '¡Hola, Amigo!',
                registrationPrompt: 'Ingresa tus datos personales y comienza el viaje con nosotros',
                nameInputPlaceholder: 'Nombre',
                emailInputPlaceholder: 'Correo Electrónico',
                passwordInputPlaceholder: 'Contraseña',
                loginEmailInputPlaceholder: 'Correo Electrónico',
                loginPasswordInputPlaceholder: 'Contraseña'
            }
        };

        // Obtiene los elementos del DOM que necesitan ser traducidos
        const elements = {
            mainTitle: document.getElementById('main-title'),
            createAccountTitle: document.getElementById('create-account-title'),
            registrationInfo: document.getElementById('registration-info'),
            createButton: document.getElementById('create-button'),
            signInTitle: document.getElementById('sign-in-title'),
            loginInfo: document.getElementById('login-info'),
            loginButton: document.getElementById('login-button'),
            signIn: document.getElementById('signIn'),
            signUp: document.getElementById('signUp'),
            welcomeBack: document.getElementById('welcome-back'),
            loginPrompt: document.getElementById('login-prompt'),
            helloFriend: document.getElementById('hello-friend'),
            registrationPrompt: document.getElementById('registration-prompt'),
            nameInput: document.getElementById('name-input'),
            emailInput: document.getElementById('email-input'),
            passwordInput: document.getElementById('password-input'),
            loginEmailInput: document.getElementById('login-email-input'),
            loginPasswordInput: document.getElementById('login-password-input')
        };

        // Recorre los elementos y actualiza su contenido o placeholder según el idioma
        for (const key in elements) {
            if (elements.hasOwnProperty(key)) {
                if (elements[key].tagName === 'INPUT') {
                    // Actualiza el placeholder de los inputs
                    elements[key].placeholder = translations[lang][`${key}Placeholder`];
                } else {
                    // Actualiza el contenido de texto de otros elementos
                    elements[key].textContent = translations[lang][key];
                }
            }
        }
    }

    // Inicializa la página con el idioma por defecto
    updateLanguage(document.documentElement.lang);
});