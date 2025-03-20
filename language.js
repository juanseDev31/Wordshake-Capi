/**
 * @file language.js
 * @description Controla la internacionalización de la página entre inglés y español.
 * @autor Kevin, Juan y Diego
 */

/**
 * Espera a que el DOM esté completamente cargado antes de ejecutar el código.
 */
console.log('language.js loaded');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    // Botón para cambiar el idioma
    const languageToggleButton = document.getElementById('language-toggle');

    // Evento cuando el usuario hace clic en el botón de cambio de idioma
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
                mainTitle: 'Welcome to WordShake Capi',
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
                loginPasswordInputPlaceholder: 'Password',
                mainTitleRules: 'Rules',
                howToPlayTitle: 'How to Play Wordshake',
                rule1: 'You have 3 minutes to find as many words as possible.',
                rule2: 'Words must be at least 3 letters long.',
                rule3: 'Each letter can only be used once per word.',
                rule4: 'Submit your words before the time runs out.',
                rule5: 'Points are awarded based on the length of the word.',
                scoringTitle: 'Scoring',
                scoringDescription: 'The points are awarded based on the length of the word as follows:',
                score3Letters: '3-letter words: 1 point',
                score4Letters: '4-letter words: 2 points',
                score5Letters: '5-letter words: 3 points',
                score6Letters: '6-letter words: 4 points',
                score7Letters: '7-letter words: 5 points',
                score8Letters: '8 or more letters: 11 points',
                maximizeScore: 'Try to find the longest words to maximize your score!',
                scoresTitle: 'Top Scores'
            },
            es: {
                mainTitle: 'Bienvenido a WordShake Capi',
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
                loginPasswordInputPlaceholder: 'Contraseña',
                mainTitleRules: 'Reglas',
                howToPlayTitle: 'Cómo Jugar Wordshake',
                rule1: 'Tienes 3 minutos para encontrar tantas palabras como sea posible.',
                rule2: 'Las palabras deben tener al menos 3 letras.',
                rule3: 'Cada letra solo se puede usar una vez por palabra.',
                rule4: 'Envía tus palabras antes de que se acabe el tiempo.',
                rule5: 'Los puntos se otorgan según la longitud de la palabra.',
                scoringTitle: 'Puntuación',
                scoringDescription: 'Los puntos se otorgan según la longitud de la palabra de la siguiente manera:',
                score3Letters: 'Palabras de 3 letras: 1 punto',
                score4Letters: 'Palabras de 4 letras: 2 puntos',
                score5Letters: 'Palabras de 5 letras: 3 puntos',
                score6Letters: 'Palabras de 6 letras: 4 puntos',
                score7Letters: 'Palabras de 7 letras: 5 puntos',
                score8Letters: '8 o más letras: 11 puntos',
                maximizeScore: '¡Intenta encontrar las palabras más largas para maximizar tu puntuación!',
                scoresTitle: 'Mejores Puntajes'
            }
        };

        // Obtiene los elementos del DOM que necesitan ser traducidos para index.html
        const elementsIndex = {
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
            loginPasswordInput: document.getElementById('login-password-input'),
            scoresTitle: document.getElementById('scores-title')
        };

        // Obtiene los elementos del DOM que necesitan ser traducidos para rules.html
        const elementsRules = {
            mainTitleRules: document.getElementById('main-title-rules'),
            howToPlayTitle: document.getElementById('how-to-play-title'),
            rule1: document.getElementById('rule-1'),
            rule2: document.getElementById('rule-2'),
            rule3: document.getElementById('rule-3'),
            rule4: document.getElementById('rule-4'),
            rule5: document.getElementById('rule-5'),
            scoringTitle: document.getElementById('scoring-title'),
            scoringDescription: document.getElementById('scoring-description'),
            score3Letters: document.getElementById('score-3-letters'),
            score4Letters: document.getElementById('score-4-letters'),
            score5Letters: document.getElementById('score-5-letters'),
            score6Letters: document.getElementById('score-6-letters'),
            score7Letters: document.getElementById('score-7-letters'),
            score8Letters: document.getElementById('score-8-letters'),
            maximizeScore: document.getElementById('maximize-score')
        };

        // Determina qué conjunto de elementos usar basado en la página actual
        const elements = document.getElementById('main-title') ? elementsIndex : elementsRules;

        console.log(elements);

        // Recorre los elementos y actualiza su contenido o placeholder según el idioma
        for (const key in elements) {
            if (elements.hasOwnProperty(key) && elements[key] !== null) {
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