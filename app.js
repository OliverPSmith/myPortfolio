
// Menu
const menuBtn = document.querySelector('#menu-btn');
const header = document.querySelector('header');
const main = document.querySelector('main');
const cText = document.querySelector('code');
const menu = document.querySelector('.menu')

const menuToggle = () => {
    header.classList.toggle('active');
    main.classList.toggle('active');
    cText.classList.toggle('active');
    menu.classList.toggle('active');
}

menuBtn.addEventListener('click', menuToggle);


// Menu Data Content

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // make the target (the tab clicked) a dataset variable
        const target = document.querySelector(tab.dataset.tabTarget)
        // remove the 'active' class for all tab content
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        // add 'active' class to selected tab content
        target.classList.add('active');
        menuToggle();
    });
});


// Projects Radio
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

