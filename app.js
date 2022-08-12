const menu__btn = document.querySelector(".nav__btn");
const menu__nav = document.querySelector(".nav__menu");
var open__btn   = false;

menu__btn.addEventListener("click",() => {
    if(open__btn===false) {
        menu__btn.classList.add("active");
        menu__nav.classList.add("active");
        open__btn = true;
    }
    else {
        menu__btn.classList.remove("active");
        menu__nav.classList.remove("active");
        open__btn = false;
    }
}
)