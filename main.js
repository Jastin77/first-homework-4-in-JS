const form = document.getElementById("forma");
const input = document.querySelector("#inpt");
const text = document.getElementById("text");

// const thisYear = 2022;

const hour = 216000;
const minute = 3600;
const second = 60;
const millisecond = 1;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = input.value;

    const hourResult = Math.floor(inputValue / hour);
    const minuteResult = Math.floor(inputValue / minute);
    const secondResult = Math.floor(inputValue / second);
    const millisecondResult = Math.floor(inputValue / millisecond);

    text.textContent = `Hour: ${hourResult}, Minute: ${minuteResult}, Second: ${secondResult}, Millisecond ${millisecondResult}`

    form.reset()

    // const result = thisYear - inputValue;

    // text.textContent = `Result: ${result} years old`;
})


console.log(new Date);


// const form = document.getElementById("form");
// const input = document.querySelector("#inp");
// const text = document.getElementById("text");

// // const thisYear = 2022;

// const USD = 11222;
// const EURO = 11570;
// const RUB = 185.84;

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const inputValue = input.value;

//     // const usdResult = Math.floor(inputValue / USD);
//     // const euroResult = Math.floor(inputValue / EURO);
//     // const rubResult = Math.floor(inputValue / RUB);

//     // text.textContent = `USD: ${usdResult}, EURO: ${euroResult}, RUB: ${rubResult}`

//     const result = thisYear - inputValue;

//     text.textContent = `Result: ${result} years old`;
//     // form.reset();
// })


// // console.log(new Date());
// // const currentDate = new Date();
