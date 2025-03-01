"use strict"

var users = [{
    "id": 1,
    "first_name": "Dulcinea",
    "last_name": "Beeton",
    "email": "dbeeton0@google.co.uk"
}, {
    "id": 2,
    "first_name": "Shoshanna",
    "last_name": "Eymer",
    "email": "seymer1@behance.net"
}, {
    "id": 3,
    "first_name": "Cull",
    "last_name": "Nazareth",
    "email": "cnazareth2@squidoo.com"
}, {
    "id": 4,
    "first_name": "Dorella",
    "last_name": "Damerell",
    "email": "ddamerell3@taobao.com"
}, {
    "id": 5,
    "first_name": "Robena",
    "last_name": "Jankovic",
    "email": "rjankovic4@youtube.com"
}, {
    "id": 6,
    "first_name": "Jarret",
    "last_name": "Guitton",
    "email": "jguitton5@ucoz.ru"
}, {
    "id": 7,
    "first_name": "Elias",
    "last_name": "Hanson",
    "email": "ehanson6@aol.com"
}, {
    "id": 8,
    "first_name": "Corby",
    "last_name": "Gartrell",
    "email": "cgartrell7@sogou.com"
}, {
    "id": 9,
    "first_name": "Scarlet",
    "last_name": "Eilhertsen",
    "email": "seilhertsen8@reverbnation.com"
}, {
    "id": 10,
    "first_name": "Merv",
    "last_name": "Lequeux",
    "email": "mlequeux9@sohu.com",
}]

let table_fill = function (users, table_id) {

    let table = document.querySelector(`#${table_id}`);

    let tbody = table.children[1]

    for (let user of users) {
        let row = document.createElement('tr')
        
        for (let item in user) {
            if (item == "id" || item == "first_name" || item == "last_name" || item == "email") {
                let cell = document.createElement('th');
                cell.innerHTML = user[item];
                row.appendChild(cell);
            }
        }
        tbody.appendChild(row);
    }
}

let table_row_active = function(table_id){
    let tbody = document.querySelectorAll(`#${table_id} tr`);

    for(let item of tbody){
        item.onclick = function(){
            if(this.className != "active"){
                this.className = "active";
            }else{
                this.className = "";
            }
        } 
        
        item.ondblclick = function(){
            alert(`Выбран: ${this.children[1].textContent}`)
        }
    }
}

let table_id = 'table1';
table_fill(users, table_id);
table_row_active(table_id);