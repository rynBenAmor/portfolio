function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');//toggle(built in btw) between the class 'open' in styles.css
    icon.classList.toggle('open');

}