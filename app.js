

const menuBtn = document.querySelector('#menu-btn');
const header = document.querySelector('header');
const main = document.querySelector('main');
const cText = document.querySelector('code');
const menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
    console.log('test');
    header.classList.toggle('active');
    main.classList.toggle('active');
    cText.classList.toggle('active');
    menu.classList.toggle('active');
})





const webAppRadio = document.querySelector('#web-app-radio');
const webAppSection = document.querySelector('#web-app-section');
const websiteRadio = document.querySelector('#website-radio');
const websiteSection = document.querySelector('#website-section');
const designRadio = document.querySelector('#design-radio');
const designSection = document.querySelector('#design-section');

webAppRadio.addEventListener('focus', () => {
    webAppSection.style.display = 'block';
    websiteSection.style.display = 'none';
    designSection.style.display = 'none';
});
websiteRadio.addEventListener('focus', () => {
    webAppSection.style.display = 'none';
    websiteSection.style.display = 'block';
    designSection.style.display = 'none';
});
designRadio.addEventListener('focus', () => {
    webAppSection.style.display = 'none';
    websiteSection.style.display = 'none';
    designSection.style.display = 'block';
});

