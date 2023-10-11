// HW 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value) && gmailInput.value.length >= 17 ) {
        gmailResult.innerHTML = 'Gmail-адрес действителен.'
    }else {
        gmailResult.innerHTML = 'Пожалуйста, введите действительный Gmail-адрес.'
    }
})

// HW 2
document.addEventListener('DOMContentLoaded', () => {
    const childBlock = document.querySelector(".child_block");
    const targetPosition = 448;
    const step = 2;

    const animate = (currentPosition) => {
        currentPosition += step;
        if (currentPosition <= targetPosition) {
            childBlock.style.left = `${currentPosition}px`;
            requestAnimationFrame(() => animate(currentPosition));
        }
    };

    let currentPosition = 0;

    requestAnimationFrame(() => animate(currentPosition));
});
