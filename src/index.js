import _ from 'lodash';
import './style.css';
import './iv-pizza.jpeg';
import about from './modules/about.js'
import menu from './modules/menu.js'

function restuarantPage(){
        let content = document.getElementById('content');
        let navBar = document.createElement('div');
        navBar.setAttribute('id', "navBar");
        let home = document.createElement("button");
        home.textContent = "Home";
        home.setAttribute("class","navBtns");
        home.addEventListener("click", loadPage);
        let menu = document.createElement('button');
        menu.textContent = "Menu";
        menu.setAttribute("class","navBtns");
        menu.addEventListener("click", loadMenu);
        let contact = document.createElement('button');
        contact.textContent= "Contact";
        contact.setAttribute("class","navBtns");
        navBar.appendChild(home);
        navBar.appendChild(menu);
        navBar.appendChild(contact);
        content.appendChild(navBar);

        let hero = document.createElement("div");
        hero.setAttribute("id", "hero");
        let restName = document.createElement('p');
        restName.setAttribute('id','restName');
        restName.textContent = "Belaying Pin";
        hero.appendChild(restName);
        content.appendChild(hero);

    
}
function init(){
    restuarantPage();
    about();
}
//init();

function loadPage(){
    content.textContent = ""
    restuarantPage();
    about();
}

function loadMenu(){
    content.textContent = ""
    restuarantPage();
    menu();
}

loadMenu();

