// Завдання 1
console.log("Завдання 1");

// Напиши скрипт в якому є три радіобатони зі значенями кольрів. 
// При обиранніна будь якого колір фону боді змінюється відповідно

const radioFirstRef = document.querySelectorAll("label > input")[0];
console.log(radioFirstRef);

const radioSecondRef = document.querySelectorAll("label > input")[1];
console.log(radioSecondRef);

const radioThirdRef = document.querySelectorAll("label > input")[2];
console.log(radioThirdRef);

radioFirstRef.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.currentTarget.value;
});

radioSecondRef.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.currentTarget.value;
});

radioThirdRef.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.currentTarget.value;
});



// Завдання 2
console.log("Завдання 2");

// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'

const inputLink = document.getElementById("name-input");
const textLink = document.getElementById("name-output");

inputLink.addEventListener("input", (event) => {
    textLink.textContent = event.currentTarget.value;
});



// Завдання 3
console.log("Завдання 3");

// Напиши скрипт, який би при втраті фокуса на інпут, 
// перевіряв його вміст на правильну кількість символів.
// * Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// * Якщо введена відповідна кількість, то border інпут стає зеленим, якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid

const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        if (inputRef.classList.contains("invalid")) {
            inputRef.classList.replace("invalid", "valid");
        } else {
            inputRef.classList.add("valid");
        };
    } else {
        inputRef.classList.add("invalid");
    };
});



// Завдання 4
console.log("Завдання 4");

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text оновлюючи властивість font-size. 
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту

const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value + "px";
});