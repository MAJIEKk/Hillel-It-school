"use strict";

document.getElementById('strBTN').onclick = function () {
    strF()
};

function strF() {
    let str = prompt("Enter your string:", 'My <b>name</b> is <i>Alex</i>');
    let newStr = "";
    let flag =false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "<") {
           flag=true;
        }
        if (flag===false){
            newStr+=str[i];
        }
        
            if(str[i] === ">") {
                flag=false;
             }

    }
    document.getElementById("strGet").appendChild(document.createElement("li")).appendChild(document.createTextNode(newStr));
}
