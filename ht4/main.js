"use strict";

document.getElementById('strBTN').onclick = function () {
    strF()
};

function strF() {
    let str = prompt("Enter your string:", 'My <b>name</b> is <i>Alex</i>');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "<") {
            for (let k = 2; i + k < str.length; k++) {
                if (str[i + k] === ">") {
                    str = str.slice(0, i) + str.slice(i + k + 1);
                    break;
                }
            }
        }
    }
    console.log(document.getElementById('strGet'));
    document.getElementById('strGet').innerHTML = `Your strins:</br><a>${str}</a>`;
    alert(str);
}
// phoneNumber = prompt("Enter your phone number:")