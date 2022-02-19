"use strict";

function wrapTags(str,tagName){
    return `<${tagName}>${str}</${tagName}>`;
}

var res = wrapTags("Hello world", "p")

console.log(res) // <p>Hello world</p>