document.getElementById('phoneBTN').onclick = function () {
    phoneF()
};

function phoneF() {
    var nationality = window.confirm("Do you have Ukrainian number?");
    phoneNumber = prompt("Enter your phone number:", '+380671234567');
    if (phoneNumber.length < 13 || phoneNumber.length > 13) {
        alert("Please enter '+' and 12 numbers");
        phoneF();
    }
    if (nationality && phoneNumber.slice(0, 4) != "+380") {
        alert("Your phone suppose to start whith '+380...'!");
        phoneF();
    }
    for (let i in phoneNumber) {
        if (phoneNumber[0] != "+") {
            alert("Please start whith '+'!")
            phoneF();
        }
        if (i != 0 && (phoneNumber[i].charCodeAt() < 48 || phoneNumber[i].charCodeAt() > 57)) {
            alert("Please enter NUMBERS, not simbols or letter");
            phoneF();
        }
    }
    alert("Yoohoo! You did it!");
    document.getElementById('phoneBTN').innerHTML = `Сlick to leave a <a style="color: red; font-weight: bold;">NEW</a> number</br>current: <a style="font-weight: bold;">${phoneNumber}</a>`;
}