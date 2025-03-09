document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'es' : 'en';
    document.documentElement.lang = newLang;
    updateLanguage(newLang);
});

function updateLanguage(lang) {
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

    for (const key in elements) {
        if (elements.hasOwnProperty(key)) {
            if (elements[key].tagName === 'INPUT') {
                elements[key].placeholder = translations[lang][`${key}Placeholder`];
            } else {
                elements[key].textContent = translations[lang][key];
            }
        }
    }
}

// Inicializar con el idioma por defecto
updateLanguage(document.documentElement.lang);