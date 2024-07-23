
var ham_menu = document.getElementById("ham_menu");

var nav = document.getElementById("nav");

function menu() {
    ham_menu.classList.toggle("fa-x")
    nav.classList.toggle("hide")
}





function scrollFun() {
    var scrollValue = window.scrollY
    var nav = document.getElementById('nav')

    if (scrollValue < 500) {
        nav.style.backgroundColor = "transparent";
    }
    else if (scrollValue > 500 && scrollValue < 1000) {
        nav.style.backgroundColor = "tan";
    }
    else {
        nav.style.backgroundColor = "skyblue";
    }

}

window.onscroll = scrollFun;



