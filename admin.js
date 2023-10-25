const loginButton = document.getElementById('login-button');
const loginPopup = document.getElementById('login-popup');
const closePopupButton = document.getElementById('close-popup');
const loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', () => {
    loginPopup.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

const users = [
    { username: 'admin', password: 'distinction' },
    { username: 'admin2', password: 'highdistinction' },
];

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your login logic here

    alert('Login successful!');
    loginPopup.style.display = 'none';
});
