"use strict"

var users = [{
    "id": 1,
    "name": "Veronika",
    "email": "vgroves0@vistaprint.com",
    "age": 50,
    "city": "Javhlant",
    "gender": "Female",
    "inn": 2604048463
}, {
    "id": 2,
    "name": "Correy",
    "email": "cskidmore1@shop-pro.jp",
    "age": 50,
    "city": "Junglinster",
    "gender": "Male",
    "inn": 5396152028
}, {
    "id": 3,
    "name": "Chrissie",
    "email": "csobieski2@go.com",
    "age": 40,
    "city": "Mercaderes",
    "gender": "Female",
    "inn": 7437115687
}, {
    "id": 4,
    "name": "Adrianna",
    "email": "awharrier3@hud.gov",
    "age": 33,
    "city": "Manuel Cavazos Lerma",
    "gender": "Non-binary",
    "inn": 6292774004
}, {
    "id": 5,
    "name": "Fairlie",
    "email": "feliasen4@bing.com",
    "age": 34,
    "city": "Радовиш",
    "gender": "Female",
    "inn": 5943534093
}]

function accardionDropDown() {
    let content = this.children[1];
    let content_title = this.children[0];


    let isHiden = content.classList.contains('hiden');
    console.log(this);
    if(isHiden){
        content.classList.replace("hiden", 'show');
        content_title.classList.replace("passive", 'active');

    } else{
        content.classList.replace("show", 'hiden');
        content_title.classList.replace("active", 'passive');
    }
    

}

function createaccardion(users, accardionSelector) {
    var container = document.querySelector(accardionSelector);

    for (let item of users) {
        let accardion_item = document.createElement("div");
        let title = document.createElement("h3");
        let content = document.createElement("div");
        let content_img = document.createElement("div");
        let content_txt = document.createElement("div");



        accardion_item.onclick = accardionDropDown;

        accardion_item.className = "accardion-item"
        title.className = "accardion-title passive";
        content.className = "accardion-container hiden";
        content_img.className = "accardion-picture";
        content_txt.className = "accardion-text";


        title.innerHTML = item.name;

    
        content_img.innerHTML="avatar";
        for (let flag in item) {
            if (flag != 'id') content_txt.innerHTML += `<div><b>${flag}</b>: ${item[flag]}</div>`;
        }

        accardion_item.appendChild(title);
        accardion_item.appendChild(content);
        content.appendChild(content_img);
        content.appendChild(content_txt);
        container.appendChild(accardion_item);

    }

    /*     var container1 = document.querySelector(".accardion_item");
        container1.onclick = function(){
            console.log(this); */
}




createaccardion(users, '.accardion');