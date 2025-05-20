function fetchMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello from the future!");
        }, 2000);
    });
}

const button = document.querySelector('button');
const text = document.querySelector('p');

button.addEventListener('click', async () => {
    text.innerText = 'Loading...'
    const message = await fetchMessage();
    text.innerText = message;
});

// function fetchMessage(callBack) {
//     setTimeout(() => {
//         callBack('Hello from the future!');
//     }, 2000);
// }

// const button = document.querySelector('button');
// const text = document.querySelector('p');

// button.addEventListener('click', () => {
//     text.innerText = 'Loading...'
//     let message;
//     fetchMessage((message) => {
//         text.innerText = message;
//     })
// });

// function fetchMessage() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello from the future!");
//         }, 2000);
//     });
// }

// const button = document.querySelector('button');
// const text = document.querySelector('p');

// button.addEventListener('click', async () => {
//     text.innerText = 'Loading...'
//     fetchMessage().then((message) => {
//         text.innerText = message;
//     });
// });