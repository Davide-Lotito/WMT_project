function openMenu(ev, menuName) {
    let i, menu, tablinks;
    menu = document.getElementsByClassName("sub-menu");
    for (i = 0; i < menu.length; i++) {
        menu[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < menu.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    ev.currentTarget.firstElementChild.className += " active";
}


// ------------------------ EVENT HANDLERS ---------------
pizza = document.getElementById("pizza-link"); 
pasta = document.getElementById("pasta-link");
starter = document.getElementById("main-link");
dessert = document.getElementById("dessert-link");

pizza.addEventListener("click", (ev)=>{
    openMenu(ev, 'Pizza');
});

pasta.addEventListener("click", (ev)=>{
    openMenu(ev, 'Pasta');
});

starter.addEventListener("click", (ev)=>{
    openMenu(ev, 'Main');
});

dessert.addEventListener("click", (ev)=>{
    openMenu(ev, 'Dessert');
});

pizza.click(); //default menu page