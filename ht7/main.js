"use strict";

function sort(arr) {
    let reversArr = [];
    for (let tmp of arr)
        reversArr.unshift(tmp)
    return reversArr;
}

function sortUpToDown(ar) {

    let arr=[];
    for (let item of ar)
    arr.push(item);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j + 1] > arr[j]) {
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
return arr;
}

var res = sortUpToDown(["a", "b", "d", "c"])

console.log(res);

res = sort(["a", "b", "d", "c"]);

console.log(res);