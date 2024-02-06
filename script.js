const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

const positiveTexts = [
    'Are You Ready to Feel Special? ',
    'Will You Be My Valentine Forever? ',
    ' I love You <3'
];

let positiveTextIndex = 0;

yesBtn.addEventListener('click', () => {
    // question.innerHTML = 'You are the best person in the world';

    if (positiveTextIndex < positiveTexts.length) {
        question.innerHTML = positiveTexts[positiveTextIndex];
        positiveTextIndex++;
    }
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});