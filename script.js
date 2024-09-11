document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');
    const uidDisplay = document.getElementById('uidDisplay');
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    // Apply initial theme based on system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    emailInput.addEventListener('input', () => {
        const email = emailInput.value;
        const isValid = validateEmail(email);

        if (isValid) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            submitButton.classList.add('enabled');
            submitButton.disabled = false;
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            submitButton.classList.remove('enabled');
            submitButton.disabled = true;
        }
    });

    submitButton.addEventListener('click', () => {
        const email = emailInput.value;
        const uid = extractUID(email);
        uidDisplay.textContent = uid;
    });

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    });

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@(connect\.hku\.hk|hku\.hk)$/;
        return regex.test(email);
    }

    function extractUID(email) {
        return email.split('@')[0];
    }
});