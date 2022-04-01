function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    button2.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    label.classList.toggle(darkModeClass);
    label2.classList.toggle(darkModeClass);
    input.classList.toggle(darkModeClass)
    input2.classList.toggle(darkModeClass)
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const button2 = document.getElementById('logar');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const label = document.getElementsByTagName('label')[0]
const label2 = document.getElementsByTagName('label')[1]
const footer = document.getElementsByTagName('footer')[0];
const input = document.getElementsByName('email')[0]
const input2 = document.getElementsByName('senha')[0]


button.addEventListener('click', changeMode);