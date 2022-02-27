"use strict";


let user = {
    id: 11,
    name: "Alex",
    age: 25,
    email: "alex@gmail.com",
    city: "Dnipro",

}

user.showCard = function (userCard) {
    let userInfoShow = document.querySelector(`#${userCard}`);
    let card = "";

    for(let key in this){
        if(key!="showCard")
        card+=`${key}: ${this[key]}<br>`;
    }
    userInfoShow.innerHTML = card;
};

user.showCard("user-info");
