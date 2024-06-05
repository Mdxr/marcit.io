const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");


document.addEventListener('click', (e) => {
    if(e.target.id != 'burger-icon' && e.target.id != 'b-bar'){
        burgerMenu.classList.remove('active');
    } else {
        burgerMenu.classList.toggle('active');
    }
})
