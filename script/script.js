let btn = document.querySelector('.menu__media'),
    menu = document.querySelector('.nav__list'),
    closeBtn = document.querySelector('.close-none'),
    registerForm = document.querySelector('.register-form'),
    loginLink = document.querySelector('.login__link'),
    loginForm = document.querySelector('.login-form'),
    navBtn = document.querySelector('.nav__btn');

btn.addEventListener('click', () => {
    menu.classList.add('active');
    if (menu.classList.contains('active')) {
        closeBtn.style = `
        top: 4%;
        right: 6%;`;
        btn.style = `display: none;`
    }
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    btn.style = `display: flex;`
    closeBtn.style.display = 'none';
});

$('.nav__btn').click(function () {
    $('.account__content').fadeIn(500);
    
});

$('.login__link').click(function () {
   $('.content__account').fadeIn(500);
});

$('.account__content').click((e) => {
    if (e.target === e.currentTarget) {
        $('.account__content').fadeOut(500);
    }
});
$('.content__account').click((e) => {
    if (e.target === e.currentTarget) {
        $('.content__account').fadeOut(500);
    }
});