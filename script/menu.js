function openMenu(evt, menuName) {
    let i, menu, tablinks;
    menu = document.getElementsByClassName("sub-menu");
    for (i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < menu.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " active";
}
document.getElementById("start").click();