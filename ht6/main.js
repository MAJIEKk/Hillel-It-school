"use strict";

function exponentiate(arr, degree) {
    for (let i in arr)
        arr[i] **= degree;
    return arr;
}

var res = exponentiate([2, 4, 3, 1], 2);

console.log(res);