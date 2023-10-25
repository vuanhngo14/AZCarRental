const loginButton = document.getElementById('login-button');
const loginPopup = document.getElementById('login-popup');
const closePopupButton = document.getElementById('close-popup');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

const users = [
    { username: 'admin', password: 'distinction' },
    { username: 'admin2', password: 'highdistinction' },
];

loginButton.addEventListener('click', () => {
    loginPopup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

    if (user) {
        messageDiv.textContent = 'Login successful!';
        window.location.href = 'admin-inspect.html'; 
    } else {
        messageDiv.textContent = 'Invalid username or password. Please try again.';
    }
});
